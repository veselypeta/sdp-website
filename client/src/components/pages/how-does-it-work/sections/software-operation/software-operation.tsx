import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import RPIConnectionDiagram from '../../../../../images/full-connection-diagram.png';
import pressureSensor from '../../../../../images/pressure-sensor.jpg';
import { CenteredFigure } from '../../../../atoms/centered-figure';

export const SoftwareOperation: React.FC = () => {
    return (
        <>
            <h2>Software Operation</h2>
            <p>
                The software is responsible for the control of the robot and the safety of users while it is operating.
                The software is run on a Raspberry Pi and uses a variety of sensors to collect data about the
                robot&apos;s position, state and motion in order to operate correctly and safely.
            </p>

            <p>
                First of all, a number of switches are used to detect the position of the robot. A switch is mounted to
                the base which is responsible for checking when the robot has reached the bottom position. Another is
                mounted to the roof for detecting when the robot has reached the high position. Furthermore, there is a
                switch mounted to the door mechanism for detecting if the door is open or closed. This is a safety
                feature as the software will prevent the robot from operating while the door is open.
            </p>

            <p>
                Pressure sensors are also used. They are responsible for detecting the gripping force provided by the
                top and bottom grippers to grip the jar. There are four pressure sensors in total; two for the bottom
                gripper, with one mounted per antler; and two for the top gripper. These ensure that we have sufficient
                gripping force on the jar in order to safely and effectively open it. The analogue pressure sensor data
                cannot be read by the Raspberry Pi so we use an Arduino to read the analogue data and send the data to
                the Pi through USB. The switches and motors are connected to the Pi directly through its GPIO ports.
            </p>
            <Container>
                <Row>
                    <Col xs={6}>
                        <CenteredFigure
                            src={RPIConnectionDiagram}
                            alt="Connection Diagram"
                            caption="Connection Diagram"
                            styles={{ width: '100%' }}
                        />
                    </Col>
                    <Col xs={6}>
                        <CenteredFigure
                            src={pressureSensor}
                            alt="Pressure Sensor"
                            caption="Pressure Sensor"
                            styles={{ width: '80%' }}
                        />
                    </Col>
                </Row>
            </Container>
            <p>
                In this architecture the state is available globally to any process of the program. This is good; it is
                simple and understandable, makes it easy to implement new features and enables easy prototyping. It is
                however also dangerous for that same reason. Global variables can be read, changed and deleted by any
                part of the code, which makes it really difficult to debug when problems will arise. Storing these
                variables in files also introduces a lot of latency as the value must be read/written from disk, this is
                an expensive operation. We also have to ensure that we have the proper privileges set on these files to
                prevent any other process from being able to mess with them.
            </p>
        </>
    );
};
