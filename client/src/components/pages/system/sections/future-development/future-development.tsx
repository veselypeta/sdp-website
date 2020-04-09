import React from 'react';
import { Row, Col } from 'react-bootstrap';
import bottles from '../../../../../images/bottles.jpeg';
import { CenteredFigure } from '../../../../atoms/centered-figure';

export const FutureDevelopmentSection: React.FC = () => {
    return (
        <>
            <h2>Potential for Future Development</h2>
            <p>
                The last type of containers that we had thought of opening were tins and cans. As this would be done in
                the same space as jar opening either a controller would be needed for the user to tell the robot what
                type of container it is, or image recognition for the robot to discern this itself. An alternative could
                again be a mounted assistant piece. In both the tool would be a flat metal pry that’s pushed under the
                tab to lift it open.
            </p>
            <Row>
                <Col xs={4}>
                    <CenteredFigure src={bottles} alt="Bottles" styles={{ width: '100%' }} />
                </Col>
                <Col>
                    <p>At this stage no one could argue that our robot deserves its Omni-opener name.</p>
                    <p>
                        Once all containers are opened we could also consider closing some afterwards, by either holding
                        on to the lid or just helping with the last bit of tightening once the user has placed the lid
                        back on the jar.
                    </p>
                </Col>
            </Row>
        </>
    );
};
