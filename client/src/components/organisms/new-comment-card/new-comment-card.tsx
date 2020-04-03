import React, { useState } from 'react';
import { Button, Card, Form, Spinner } from 'react-bootstrap';

export const NewCommentCard: React.FC = () => {
    const [commentText, setCommentText] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const handleCommentChange = (e: React.FormEvent<HTMLInputElement>): void => {
        setCommentText(e.currentTarget.value);
    };

    const onFormSubmit = (): void => {
        setSubmitting(true);
        const payload = JSON.stringify({
            message: commentText,
        });
        fetch('/api/comment', {
            method: 'POST',
            body: payload,
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => {
            if (res.status !== 200) {
                alert('An error occurred when submitting your comment');
            }
            setSubmitting(false);
        });
    };

    return (
        <Card style={{ padding: '10px' }}>
            <Card.Title>Add a new comment</Card.Title>
            <Card.Body>
                <Form onSubmit={onFormSubmit}>
                    <Form.Group>
                        <Form.Label>Comment</Form.Label>
                        <Form.Control placeholder="Write your comment" onChange={handleCommentChange} required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        {submitting ? <Spinner animation={'border'} /> : 'Post'}
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};
