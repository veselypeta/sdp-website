import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { NewCommentCard } from '../organisms/new-comment-card';
import { CommentCard } from '../organisms/comment-card';

export interface Comment {
    id: string;
    message: string;
    sender: string;
    timestamp: Date;
}

const Comments: React.FC = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['name']);
    const isCookie = Boolean(cookies.name);

    const [visible, setVisible] = useState(!isCookie);
    const [username, setUsername] = useState<string>();
    const [comments, setComments] = useState<Comment[]>([]);

    if (!isCookie && !visible) {
        window.location.reload();
    }
    const handleClose = (): void => setVisible(false);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (username) {
            setCookie('name', username, { path: '/' });
            handleClose();
        }
    };

    const handleUsernameChange = (e: React.FormEvent<HTMLInputElement>): void => {
        const newValue = e.currentTarget.value;
        setUsername(newValue);
    };

    useEffect(() => {
        fetch('/api/comments', {
            credentials: 'include',
        })
            .then((res) => res.json())
            .then((res) => setComments(res));
    }, []);

    const sortedComments = comments.sort((a, b) => {
        const firstDate = new Date(a.timestamp).getTime();
        const secondDate = new Date(b.timestamp).getTime();
        return secondDate - firstDate;
    });

    return (
        <>
            <h1>Comments</h1>
            <NewCommentCard />
            {sortedComments.map((c) => (
                <CommentCard {...c} key={c.id}>
                    {c.message}
                </CommentCard>
            ))}
            <Button onClick={(): void => removeCookie('name', { path: '/' })}>Remove Cookie</Button>
            <Modal
                show={visible}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={(): void => setVisible(true)}
            >
                <Modal.Header>
                    <Modal.Title>To make comments please enter a username</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control placeholder="Enter a username" onChange={handleUsernameChange} required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Comments;
