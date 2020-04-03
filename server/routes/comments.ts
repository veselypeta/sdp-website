import express from 'express';
import { getDB } from '../db/connect';
import { Comment } from '../db/models/comment';
import { Reply } from '../db/models/reply';
import { DataError } from 'node-json-db/dist/lib/Errors';

export const router = express.Router();

router.get('/comments', (req, res) => {
    try {
        const db = getDB();
        const data = db.getData('/comments');
        return res.status(200).send(data);
    } catch (e) {
        if (e instanceof DataError && e.id === 5) {
            return res.status(200).send([]);
        }
        return res.status(500).send('unknown error');
    }
});

router.post('/comment', (req, res) => {
    const { name: sender } = req.cookies;
    const { message } = req.body;
    if (!(message && sender)) {
        return res.status(500).send(`required options not met`);
    }
    const comment = new Comment(message, sender);
    const db = getDB();
    db.push('/comments[]', comment);
    res.sendStatus(200);
});

router.get('/replies/:commentId', (req, res) => {
    const { commentId } = req.params;
    const db = getDB();
    try {
        const replies = db.getData(`/replies/${commentId}`);
        res.status(202).send(replies);
    } catch (e) {
        if (e instanceof DataError && e.id === 5) {
            return res.status(200).send([]);
        }
        res.status(500).send('unknown error');
    }
});

router.post('/reply', async (req, res) => {
    const { name: sender } = req.cookies;
    const { message, rootCommentId } = req.body;
    if (!(message && rootCommentId && sender)) {
        return res.status(500).send(`required options not met`);
    }
    const reply = new Reply(message, rootCommentId, sender);
    try {
        const db = getDB();
        const allComments = db.getData('/comments');
        const commentExists = allComments.map((c) => c.id).includes(rootCommentId);
        if (!commentExists) {
            return res.status(400).send('Invalid id provided');
        }
        db.push(`/replies/${rootCommentId}[]`, reply);
        res.sendStatus(200);
    } catch (e) {
        if (e instanceof DataError && e.id === 5) {
            return res.status(500).send('no comments exist');
        }
        res.status(500).send('unknown error');
    }
});
