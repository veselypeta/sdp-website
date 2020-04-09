import React from 'react';
import { Card } from 'react-bootstrap';
import { Reply } from '../comment-card';

export const CommentReply: React.FC<Reply> = (props: Reply) => {
    const date = new Date(props.timestamp);
    return (
        <Card style={{ marginBottom: '5px', marginLeft: '1rem', width: '80%' }} border="primary">
            <Card.Header>
                <Card.Title>{props.sender}</Card.Title>
                <Card.Subtitle style={{ fontSize: '10', color: 'grey' }}>
                    {date.toLocaleString().substr(12, 5)}
                </Card.Subtitle>
            </Card.Header>
            <Card.Body>{props.message}</Card.Body>
        </Card>
    );
};
