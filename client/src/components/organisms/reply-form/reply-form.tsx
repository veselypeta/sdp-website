import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

export const ReplyForm: React.FC = () => {
    const [replyMessage, setReplyMessage] = useState<string>();
    const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
        setReplyMessage(e.currentTarget.value);
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setReplyMessage('');
        // TODO -- send reply to server;
        console.log(replyMessage);
    };
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control onChange={handleChange} placeholder="Comment" required value={replyMessage} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Send
            </Button>
        </Form>
    );
};
