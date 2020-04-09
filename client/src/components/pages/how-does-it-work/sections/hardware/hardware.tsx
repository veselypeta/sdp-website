import React from 'react';
import { CenteredFigure } from '../../../../atoms/centered-figure';
import liftingBase from '../../../../../images/lifting-base.png';
import bottomGripper from '../../../../../images/bottom-gripper.png';
import gripperGearMechanism from '../../../../../images/gripper-gear-mechanism.png';
import liveGripper from '../../../../../images/live-gripper.jpg';
import frictionChart from '../../../../../images/friction-chart.png';
import topGripper from '../../../../../images/top-gripper.png';
import fullModel from '../../../../../images/full-model.png';
import chandelier from '../../../../../images/chandelier.png';
import tenon from '../../../../../images/tenon.png';
import gripperAntlerLive from '../../../../../images/gripper-antler-live.jpg';
import { Row, Col } from 'react-bootstrap';

export const HardwareSection: React.FC = () => {
    return (
        <>
            <h2>Hardware</h2>
            <h4>High-level Description</h4>
            <p>
                To achieve a fully automatic jar opening, the system has to execute three major motions:{' '}
                <i>Lifting, Gripping and Rotating.</i>
                Lifting to match various sized jars to the top gripper. Gripping the bottom to center and fixate the
                jar. Gripping the top to grab the lid and Rotating to unscrew the lid. The key materials we used are
                MDF, LEGO and silicone.
            </p>
            <h4>Physical Mechanism</h4>
            <ul>
                <li>
                    <p>
                        <b>Lifting: </b>In order to move the jar up and down smoothly and make sure the lifting
                        mechanism has enough strength to lift a significant weight, nuts, leadscrew and gear mechanisms
                        are used that turn the rotation motion from the motor into linear motion. The motor sits in the
                        middle below the whole platform and rotates the middle gear. Four inner gears then relay the
                        motion from the middle gear to four outside gears; each of them has a nut glued in the middle of
                        it and all are mounted on vertical threads. Thus when the motor spins, the outer gears traverse
                        up and down the threads. With this design, we can modify the ratio of the inner and middle gears
                        to change the speed and torque to whatever we need. Furthermore, there are two layers in this
                        platform with springs in-between. This is for when the jar is being unscrewed, to account for
                        the increase in height as the lid moves up; these springs help ensure we have room for this
                        offset.
                    </p>
                    <CenteredFigure src={liftingBase} alt="Lifting Base" styles={{ width: '180px' }} />
                </li>
                <li>
                    <p>
                        <b>Gripping: </b>There are some similarities to the lifting, where the motor feeds through gears
                        (where we can again test different ratios), which then rotate a nut; but this time the nut is
                        glued to the thread so both of them rotate. On the rotating threads we have slider pieces, which
                        connect to the thread via a nut, and they stick out through a slit in the board which doesn’t
                        allow the pieces to rotate – instead they traverse along the thread (see fig. X). On these
                        sliders we then mount the grippers, which results in them moving in and out, at controllable
                        speed and torque (which is a necessary control as the gripping strength needs to be quite
                        strong). This part of the mechanism is identical for the top and bottom gripper, what then
                        differs are the grippers themselves.
                    </p>
                    <p>
                        For the bottom we have two V-shaped “antlers”, which move in to hold the jar with 4 contact
                        points, allowing for better grip and more secure hold for irregular shaped jars (fig. Z). The
                        antlers however have a minimum size the object has to be to effectively hold it, therefore for
                        the top (with potentially smaller lids and bottle caps) we instead had to flat pieces moving in
                        to be the grippers (fig. Y). For both we moulded the contact pieces out of silicone, which were
                        mounted to MDF plates and then connected to the sliders. We found silicone to be the best
                        material as it had all of our necessary features: highest friction, controllable shape,
                        availability (fig. A). The space between the silicone and MDF backboard is also important as
                        that is where the pressure sensors are installed, for software to be able to read the exerted
                        pressure and squeeze tight enough to hold the jar, but not too tight to break the robot or the
                        container.
                    </p>
                    <Row>
                        <Col xs={4}>
                            <CenteredFigure src={bottomGripper} alt="Bottom Gripper" styles={{ width: '100%' }} />
                        </Col>
                        <Col xs={4}>
                            <CenteredFigure
                                src={gripperGearMechanism}
                                alt="Gripper Mechanism"
                                styles={{ width: '100%' }}
                            />
                        </Col>
                        <Col xs={4}>
                            <CenteredFigure src={liveGripper} alt="Live Gripper" styles={{ width: '100%' }} />
                        </Col>
                    </Row>
                    <CenteredFigure src={frictionChart} alt="Friction Chart" styles={{ width: '100%' }} />
                    <Row>
                        <Col xs={6}>
                            <CenteredFigure src={topGripper} alt="Top Gripper" styles={{ width: '100%' }} />
                        </Col>
                        <Col xs={6}>
                            <CenteredFigure
                                src={gripperAntlerLive}
                                alt="Gripper Antler Live"
                                styles={{ width: '70%' }}
                            />
                        </Col>
                    </Row>
                </li>
                <li>
                    <p>
                        <b>Rotating: </b>Opening a tightly shut jar is very difficult so great torque needs to be
                        applied to the rotation. We decided on using a worm drive mechanism that turns a large gear,
                        which then in turn is connected to the whole top gripping mechanism (fig. 5 above). Since during
                        development this piece has to be assembled and disassembled quite often we decided to use the{' '}
                        <a
                            href="https://en.wikipedia.org/wiki/Mortise_and_tenon"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Tenon technique
                        </a>{' '}
                        for connecting the gripper to the top rotator.
                    </p>
                    <Row>
                        <Col xs={4}>
                            <CenteredFigure src={tenon} alt="Tenon" styles={{ width: '100%' }} />
                        </Col>
                        <Col xs={4}>
                            <CenteredFigure src={chandelier} alt="Chandeleri" styles={{ width: '100%' }} />
                        </Col>
                        <Col xs={4}>
                            <CenteredFigure src={fullModel} alt="Full Model" styles={{ width: '100%' }} />
                        </Col>
                    </Row>
                </li>
            </ul>
        </>
    );
};
