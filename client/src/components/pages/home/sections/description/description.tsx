import React from 'react';
import { Row, Col } from 'react-bootstrap';
import labeledOpener from '../../../../../images/labeled-opener.png';
import { CenteredFigure } from '../../../../atoms/centered-figure';

export const DescriptionSection: React.FC = () => {
    const textStyles: React.CSSProperties = {
        fontSize: 'large',
    };
    return (
        <Row style={{ marginTop: '10px' }}>
            <Col xs={7}>
                <CenteredFigure src={labeledOpener} alt="labeled-opener" styles={{ width: '90%' }} />
            </Col>
            <Col>
                <p style={textStyles}>
                    The Omni-Opener is made up of four key parts; the lifting base <b>(1)</b>, the bottom grippers{' '}
                    <b>(2)</b>, the top grippers <b>(3)</b>, and the rotating mechanism <b>(4)</b>. Motors power gears{' '}
                    <b>(5)</b> that spin up and down metal threads <b>(6)</b> to lift the platform to meet the upper
                    grippers.
                </p>
                <p style={textStyles}>
                    The bottom gripping mechanism is two wooden ‘antlers’, each holding two silicone grippers. Motors
                    spin more metal threads to move the ‘antlers’ in until a pressure threshold is reached against the
                    object’s body. The upper grippers are the same, only with two silicone grippers instead of one.
                    These move in to grip the object’s lid. Finally, the upper gear and motor <b>(7)</b> spin the entire
                    upper mechanism <b>(4)</b>, opening the object’s lid.
                </p>
            </Col>
        </Row>
    );
};
