import express from 'express';

export const router = express.Router();

router.get('/comment', (req, res) => {
    res.sendStatus(200);
});

router.post('/comment', (req, res) => {
    res.sendStatus(200);
});

router.get('/reply', (req, res) => {
    res.sendStatus(202);
});

router.post('/reply', (req, res) => {
    res.sendStatus(202);
});
