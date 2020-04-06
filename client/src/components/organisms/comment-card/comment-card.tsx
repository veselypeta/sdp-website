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
    const formattedTime = `${parsedDate.getHours()}:${parsedDate.getMinutes()}`;

    return (
        <Card style={{ marginTop: '1rem' }}>
            <Card.Body>
                <Card.Title>{sender}</Card.Title>
                <Card.Subtitle style={{ fontSize: '10', color: 'grey' }}>{`posted - ${formattedTime}`}</Card.Subtitle>
                <Card.Text>{message}</Card.Text>
            </Card.Body>
            <Container style={{ margin: '5px' }} data-testid="replies">
                <p>Replies</p>
                {replies.map((r) => (
                    <CommentReply {...r} key={r.id} />
                ))}
                <ReplyForm rootCommentId={id} />
            </Container>
        </Card>
    );
};
