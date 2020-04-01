import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { CommentCard } from '../organisms/comment-card';
import { data } from '../organisms/comment-card/fixtures/comment.fixtures';

const Comments: React.FC = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['name']);
    console.log(cookies);

    const [visible, setVisible] = useState(!Boolean(cookies.name));
    const [username, setUsername] = useState<string>();
    const [result, setResult] = useState<string>();
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
        fetch('/api/comment', {
            credentials: 'include',
        })
            .then((res) => res.json())
            .then((res) => setResult(res));
    }, []);

    return (
        <>
            <h1>Comments</h1>
            {cookies.name && <p>{cookies.name}</p>}
            <Button onClick={(): void => removeCookie('name', { path: '/' })}>Remove Cookie</Button>
            {data.map((c) => (
                <CommentCard {...c} key={c.id} />
            ))}
            <p>{result?.toString()}</p>
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
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="username"
                                placeholder="Enter a username"
                                onChange={handleUsernameChange}
                                required
                            />
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
