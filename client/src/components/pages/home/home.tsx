import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import bgLessLogo from '../../../images/pento-logo-bgless.png';
import pentoPoster from '../../../images/pento-poster.png';

const Home: React.FC = () => {
    return (
        <>
            <Row style={{ paddingTop: 10 }}>
                <Col xs={7}>
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
                    <p>
                        The Omni-Opener is an automated, multi-functional tool that opens jars, and bottles of all
                        shapes, sizes, and materials. It is designed to help those with a range of dexterity, grip,
                        strength, and mobility issues.
                    </p>
                    <p>
                        The Omni-Opener is made up of four key parts; the lifting base (1), the bottom grippers (2), the
                        top grippers (3), and the rotating mechanism (4). Motors power gears (5) that spin up and down
                        metal threads (6) to lift the platform to meet the upper grippers.
                    </p>
                </Col>
                <Col>
                    <img src={pentoPoster} alt="PentoPoster" style={{ width: '100%', float: 'left' }} />
                </Col>
            </Row>
        </>
    );
};

export default Home;
