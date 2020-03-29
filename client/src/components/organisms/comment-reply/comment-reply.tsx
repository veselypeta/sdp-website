import React from 'react';
import { Card } from 'react-bootstrap';
import { Reply } from '../comment-card/fixtures/comment.fixtures';

export const CommentReply: React.FC<Reply> = (props: Reply) => {
    return (
        <Card>
            <Card.Body>{props.message}</Card.Body>
        </Card>
    );
};
