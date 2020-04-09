import React from 'react';

export const UserInterfaceSection: React.FC = () => {
    return (
        <>
            <h2>User Interface</h2>
            <p>
                Creating a suitable and effective User Interface for the Omni-Opener was very important to us to ensure
                the product is as accessible as possible. We put a focus on detailing our target user using target user
                and medical research
            </p>
            <p>
                One of our main focuses was on detailing our target user. Our basic profile is a user who struggles to
                open jars but still has the ability or need to open them for cooking, use, etc. The range of products
                this targets includes not only food items but also personal care. There are a range of reasons why the
                user may struggle with these items, including: neuropathy, limited movement in upper body, limited
                dexterity, and tremor. Some conditions we have identified in our research are MS, old age, stroke,
                essential tremor (e.g. Parkinson&apos;s), and arthritis.
            </p>
            <p>
                One thing we discussed was the design of safety doors in the system. These will be attached within the
                frame, with one open-able to allow the user to place the jar inside and remove it. We will implement the
                system so that detection and opening will not begin until the door is shut, to avoid the scenario where
                a user gets their hand caught in any gripping or moving mechanism. We discussed whether the door should
                be implemented with a hinge or as a sliding door. We believe the hinge would be more accessible as it
                does not require much strength, dexterity, or coordination as a sliding door might. This design also
                minimises the states of the door and there are less risks such as the door getting stuck halfway.
            </p>
            <p>
                We also discussed including a reset button - this could be initiated by the user if something goes
                wrong, and would be hardwired into the system. In response to some feedback from experts, we have also
                been re-considering our decisions about system state lights. We had initially considered blue and red
                lights to help combat colour blindness however we were informed that placing can be more important for
                users, with a traffic light style colour scheme and layout. We have also considered adding some text to
                explain what each light means to help this issue further.
            </p>
        </>
    );
};
