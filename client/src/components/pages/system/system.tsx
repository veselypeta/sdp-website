import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AnimationCard } from '../../organisms/animation-card';

const System: React.FC = () => {
    return (
        <>
            <h1>System</h1>
            <Container>
                <Row>
                    <Col>
                        <AnimationCard />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default System;
