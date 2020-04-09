import React from 'react';
import bottleOpenerSketch from '../../../../../images/bottle-opener-sketch.jpg';
import { CenteredFigure } from '../../../../atoms/centered-figure';
import { Row, Col } from 'react-bootstrap';

export const FunctionalitySection: React.FC = () => {
    return (
        <>
            <h2>Functionality</h2>
            <p>
                Our device can open jars and screw-top bottles of different shapes and sizes with the least physical
                effort from the user – the ability to hold the container. You only need to place it into the robot, then
                take it out once opened. The closest competitors either require more user mobility or don’t support
                various sizes; none both jars and bottles.
            </p>
            <Row>
                <Col xs={3}>
                    <CenteredFigure src={bottleOpenerSketch} alt="Bottle Opener Sketch" styles={{ width: '100%' }} />
                </Col>
                <Col>
                    <p>
                        There were also plans for mounting a bottle opener, since if able to hold the bottle you can use
                        the bottle itself as a lever and only need a stable mounted opener to take away the need of
                        multi-hand coordination and dexterity.
                    </p>
                    <p>
                        With all of these functionalities in place and options for further implementations of more, this
                        is a unique product that enables people limited in some areas to take back their independence in
                        day to day cooking endeavors, cold drinks, or just enjoying that jar of nutella.
                    </p>
                </Col>
            </Row>
        </>
    );
};
