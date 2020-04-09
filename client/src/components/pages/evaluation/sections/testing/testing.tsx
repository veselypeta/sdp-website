import React from 'react';
import baseSpeedGraph1 from '../../../../../images/base-speed-graph-1.png';
import baseSpeedGraph2 from '../../../../../images/base-speed-graph-2.png';
import lifterMassCarried from '../../../../../images/lifter-mass-carried.png';
import { CenteredFigure } from '../../../../atoms/centered-figure';

export const TestingSection: React.FC = () => {
    return (
        <>
            <h2>Testing</h2>
            <p>
                Throughout the development of the project we have carefully carried out compatibility tests every time
                the new component was added to ensure that all the subsystems are fully functional. Those main
                subsystems included: lifting base, bottom and top grippers and rotating mechanism at the top. What’s
                more, we have tested the lifting base in terms of weight it can carry and how its lifting speed changes
                under additional weight, the speed of the rotation mechanism and the pressure threshold at which the
                grippers exert enough grip strength to open a jar. We have also tested the Omni Opener on different
                kinds of jars to ensure that it can open it no matter what its size, material and shape is.
            </p>
            <p>
                <b>Lifing Base</b>
            </p>
            <p>
                We thoroughly tested the lifting speed of the base both up and down. You can see the results in the
                figures shown below. We tested with differently weighted jars to see if this would affect the speed. We
                can see that the speeds do decrease as the weight increases, however we are still moving very slowly
                with only around 1.5cm moved in 10s. We did not have access to any significantly more powerful or faster
                motors and even if we did we suspect that other components wouldn’t be able to deal with the strain.
            </p>
            <CenteredFigure src={baseSpeedGraph1} alt="Speed Graph 1" styles={{ width: '80%' }} />
            <CenteredFigure src={baseSpeedGraph2} alt="Speed Graph 2" styles={{ width: '80%' }} />
            <p>
                <b>Weight Test</b>
            </p>
            <p>
                We also wanted to weight test the base to ensure that we would have sufficient capacity to carry the
                necessary sections such as the grippers. We also had two configurations that we wanted to test; low
                torque and high torque, depending on the setup of the gearing in the base. The graph below shows that
                unweighted the low torque configuration was faster, but as we start to add more weight the high torque
                configuration is clearly superior. Therefore we opted to use the high torque configuration.
            </p>
            <CenteredFigure src={lifterMassCarried} alt="Lifter Mass Carried Graph" styles={{ width: '80%' }} />
            <p>
                <b>Grippers</b>
            </p>

            <p>
                We had to find a threshold at which the gripping mechanism will automatically stop but one that ensures
                that the grippers exert enough force on the jar and its lid so that the rotating mechanism can easily
                open the jar without it slipping through grippers. We used pressure sensors and by gradually increasing
                the voltage threshold at which the motors stop we found that the voltage at which there was enough
                pressure exerted for the rotation mechanism to open a jar. The threshold voltage was 4000 mV.
                Additionally, we tested the rotation speed of the opening mechanism and we measured that it takes the
                mechanism around 50 seconds to rotate full 360 degrees.
            </p>

            <p>
                <b>Multi-Functionality</b>
            </p>
            <p>
                We wanted to make sure that the Omni Opener can open any jar no matter what its proportions are and what
                it is made of. To achieve that we tested the device on a variety of jars that had different sizes,
                shapes(circular, hexagonal, oval) and materials(glass, plastic). The tests turned out to be successful
                and concluded that those properties of a jar do not affect functionality of the Omni Opener.
            </p>
        </>
    );
};
