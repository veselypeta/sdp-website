import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Comment, replies } from './fixtures/comment.fixtures';
import { ReplyForm } from '../reply-form';
import { CommentReply } from '../comment-reply';

export const CommentCard: React.FC<Comment> = ({ id, commenter, message, timestamp }: Comment) => {
    const [openReply, setOpenReply] = useState(false);
    const toggleOpenReply = (): void => setOpenReply(!openReply);
    const readableDate = `${timestamp.getHours()}:${timestamp.getMinutes()}`;
    const filteredReplies = replies.filter((r) => r.rootCommentId === id);
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{commenter}</Card.Title>
                <Card.Subtitle>{`posted at: ${readableDate}`}</Card.Subtitle>
                <Card.Text>{message}</Card.Text>
            </Card.Body>
            {filteredReplies.map((r) => (
                <CommentReply {...r} key={r.id} />
            ))}
            {openReply && <ReplyForm />}
            <Button onClick={toggleOpenReply}>{openReply ? 'Close Reply' : 'Reply'}</Button>
        </Card>
    );
};
