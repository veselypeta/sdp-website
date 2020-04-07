import React from 'react';
import { Card } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import animation from '../../../images/FinalAnimation.gif';

export const AnimationCard: React.FC = () => {
    return (
        <Card>
            <Card.Header>
                <Card.Title>Animation</Card.Title>
            </Card.Header>
            <Card.Body style={{ width: '100%' }} className="align-items-center d-flex justify-content-center">
                <Image fluid src={animation} alt={'Loading the animation'} style={{ width: '60%' }} />
            </Card.Body>
        </Card>
    );
};
