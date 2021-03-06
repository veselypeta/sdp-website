import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import bgLessLogo from '../../../images/pento-logo-bgless.png';

export const PentoLogo: React.FC = () => {
    return (
        <Container>
            <Row>
                <Col xs={6} md={4}>
                    <img src={bgLessLogo} width={60} alt="Logo" style={{ borderRadius: '10%' }} />
                </Col>
            </Row>
        </Container>
    );
};
