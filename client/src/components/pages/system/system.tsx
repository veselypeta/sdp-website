import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AnimationCard } from '../../organisms/animation-card';

const System: React.FC = () => {
    return (
        <div style={{ width: '100%' }}>
            <h1>System</h1>
            <Container>
                <Row>
                    <Col>
                        <AnimationCard />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default System;
