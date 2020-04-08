import React from 'react';
import { Col, Row } from 'react-bootstrap';
import bgLessLogo from '../../../../../images/pento-logo-bgless.png';
import pentoPoster from '../../../../../images/pento-poster.png';
import { CenteredFigure } from '../../../../atoms/centered-figure';

export const IntroSection: React.FC = () => {
    const textStyles: React.CSSProperties = {
        fontSize: 'x-large',
        fontWeight: 'bold',

        padding: '3rem',
    };
    return (
        <Row style={{ paddingTop: 10, paddingBottom: 10 }}>
            <Col xs={7}>
                <Row style={{ height: '100%' }}>
                    <Col>
                        <div
                            style={{
                                verticalAlign: 'baseline',
                                backgroundColor: '#cdcdcd',
                                display: 'flex',
                                padding: 10,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <h1 style={{ paddingRight: 20 }}>PENTO</h1>
                            <img src={bgLessLogo} alt="logo" style={{ height: '80px' }} />
                        </div>
                        <hr />
                        <p style={textStyles} className="text-center">
                            The Omni-Opener is an automated, multi-functional tool that opens jars, and bottles of all
                            shapes, sizes, and materials. It is designed to help those with a range of dexterity, grip,
                            strength, and mobility issues.
                        </p>
                        <CenteredFigure src={bgLessLogo} alt="logo" styles={{ width: '10%' }} />
                    </Col>
                </Row>
            </Col>
            <Col>
                <img src={pentoPoster} alt="PentoPoster" style={{ width: '100%' }} />
            </Col>
        </Row>
    );
};
