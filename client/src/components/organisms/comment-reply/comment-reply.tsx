import React from 'react';
import { Card } from 'react-bootstrap';
import { Reply } from '../comment-card';

export const CommentReply: React.FC<Reply> = (props: Reply) => {
    return (
        <Card style={{ marginBottom: '5px', marginLeft: '1rem', width: '80%' }} border="primary">
            <Card.Header>{props.sender}</Card.Header>
            <Card.Body>{props.message}</Card.Body>
        </Card>
    );
};
