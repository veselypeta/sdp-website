import React, { useState, useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';
import { ReplyForm } from '../reply-form';
import { CommentReply } from '../comment-reply';
import { Comment } from '../../pages/comments';

export interface Reply {
    id: string;
    message: string;
    rootCommentId: string;
    sender: string;
    timestamp: Date;
}

export const CommentCard: React.FC<Comment> = ({ id, sender, message, timestamp }: Comment) => {
    const [replies, setReplies] = useState<Reply[]>([]);

    useEffect(() => {
        fetch(`/api/replies/${id}`)
            .then((res) => res.json())
            .then((json) => setReplies(json));
    }, [id]);

    const parsedDate = new Date(timestamp);
    const formattedTime = parsedDate.toLocaleString().substr(12, 5);

    return (
        <Card style={{ marginTop: '1rem' }}>
            <Card.Header>
                <Card.Title>{sender}</Card.Title>
                <Card.Subtitle style={{ fontSize: '10', color: 'grey' }}>{formattedTime}</Card.Subtitle>
            </Card.Header>
            <Card.Body>
                <Card.Text style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{message}</Card.Text>
            </Card.Body>
            <hr />
            <Container style={{ margin: '5px' }} data-testid="replies">
                <h5>Replies</h5>
                {replies.map((r) => (
                    <CommentReply {...r} key={r.id} />
                ))}
                <ReplyForm rootCommentId={id} />
            </Container>
        </Card>
    );
};
