import React from 'react';
import { Card } from 'react-bootstrap';
import defaultAvatar from '../../../images/profile/avatar.png';

interface Props {
    src?: string;
    name: string;
}

export const ProfileCard: React.FC<Props> = (props: Props) => {
    return (
        <Card>
            <Card.Img variant="top" src={props.src ? props.src : defaultAvatar} style={{ width: '100%' }} />
            <Card.Body
                className="text-center"
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
            >
                <Card.Title>{props.name}</Card.Title>
            </Card.Body>
        </Card>
    );
};
