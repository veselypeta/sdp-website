import React, { useState } from 'react';
import { Button, Spinner, Form } from 'react-bootstrap';

interface Props {
    rootCommentId: string;
}

export const ReplyForm: React.FC<Props> = ({ rootCommentId }: Props) => {
    const [replyMessage, setReplyMessage] = useState<string>();
    const [submitting, setSubmitting] = useState(false);
    const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
        setReplyMessage(e.currentTarget.value);
    };
    const handleSubmit = (): void => {
        setSubmitting(true);
        const payload = JSON.stringify({
            message: replyMessage,
            rootCommentId,
        });
        fetch('/api/reply', {
            method: 'POST',
            body: payload,
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => {
            if (res.status !== 200) {
                alert('An error occurred when submitting your reply');
            }
            setSubmitting(false);
        });
    };
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control onChange={handleChange} placeholder="Reply" required value={replyMessage} />
            </Form.Group>
            <Button variant="primary" type="submit">
                {submitting ? <Spinner animation={'border'} /> : 'Send'}
            </Button>
        </Form>
    );
};
