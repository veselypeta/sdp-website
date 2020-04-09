import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { CenteredFigure } from '../../../../atoms/centered-figure';
import fullAnimation from '../../../../../images/FinalAnimation.gif';

export const ConceptSection: React.FC = () => {
    return (
        <>
            <h2>Concept</h2>
            <Row>
                <Col xs={6}>
                    <p>
                        Our system is an automated jar opener, designed to allow for additional functionality to open
                        bottles, tins, and cans. The jar opening is completely hands-free to help users with a wide
                        range of strength, grip, and mobility issues, or other medical conditions.
                    </p>
                    <p>
                        This robot would help people struggling with arthritis, tremors or neurological conditions which
                        make daily tasks, like opening jars and bottles, a challenge. These conditions affect a large
                        part of the population, for whom we could give back some independence in their daily lives:
                        helping them cook on their own by opening jars and tins for them, or grabbing a drink whenever
                        they please by opening their bottles and cans.
                    </p>
                </Col>
                <Col xs={6}>
                    <CenteredFigure
                        src={fullAnimation}
                        alt="Full Animation"
                        styles={{ width: '100%' }}
                        caption="Animation of full opening operation of the Omni-Opener"
                    />
                </Col>
            </Row>
        </>
    );
};
