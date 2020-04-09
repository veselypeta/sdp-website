import React from 'react';
import stateColourTable from '../../../../../images/state-colour-table.png';
import { CenteredFigure } from '../../../../atoms/centered-figure';

export const UserInterfaceSection: React.FC = () => {
    return (
        <>
            <h2>User Interface</h2>
            <p>
                Creating a suitable and effective User Interface for the Omni-Opener was very important to us to ensure
                the product is as accessible as possible. We put a focus on detailing our target user using target user
                and medical research. Our basic profile is a user who struggles to open jars but still has the ability
                or need to open them for cooking, use, etc. The range of products this targets includes not only food
                items but also personal care. There are a range of reasons why the user may struggle with these items,
                including neuropathy, limited movement in the upper body, limited dexterity, and tremor. Some conditions
                we have identified in our research are MS, old age, stroke, essential tremor (e.g. Parkinson&aspos;s),
                and arthritis.
            </p>
            <p>
                In some medical research via interviewing a physiotherapist and her colleagues, we identified that there
                are also many knock-on effects of conditions that affect dexterity and mobility, including sight issues,
                related to e.g. stroke. We designed the Omni-Opener to have a user interface that tried to take into
                account as many issues as we could.
            </p>
            <p>
                Some of the main design decisions we have made include safety walls, a see-through push door on hinges,
                a reset button, and an LED system-state identification system.
            </p>
            <p>
                The safety walls are attached within the frame, with one open-able to allow the user to place the jar
                inside and remove it. Software has been implemented in the system so that detection and opening will not
                begin until the door is shut, to avoid the scenario where a user gets their hand caught in any gripping
                or moving mechanism. We discussed whether the door should be implemented with a hinge or as a sliding
                door. We felt the hinge design is more accessible as it does not require much strength, dexterity, or
                coordination as a sliding door might. This design also minimises the states of the door and there are
                fewer risks such as the door getting stuck halfway.
            </p>
            <p>
                In the system we have also included a reset button - this can be initiated by the user if something goes
                wrong, and is hardwired into the system. In our user guide we have detailed when this reset button is to
                be used - in case of emergency or anything going wrong, and also generally to troubleshoot issues such
                as the system not recognising if there is an object inside.
            </p>
            <p>
                Finally, we have implemented an LED system-state identifier on the front of the system. These lights
                have colours indicated what state the system is in and whether the user should interact with it or not.
                We had initially considered using blue and red lights to help combat red/green colour blindness,
                however, we were informed by our course experts that placement, and labels, can be far more useful to
                users. As a result, we have three lights, in the main colours of red, orange, and green - like a traffic
                light system, which is easily identifiable. The lights and what each means are detailed in this table:
            </p>
            <CenteredFigure src={stateColourTable} alt="State Colour Table" styles={{ width: '90%' }} />
        </>
    );
};
