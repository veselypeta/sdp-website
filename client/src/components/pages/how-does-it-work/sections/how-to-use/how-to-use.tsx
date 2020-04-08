import React from 'react';
import userInteraction from '../../../../../images/user-interaction.png';
import { CenteredFigure } from '../../../../atoms/centered-figure';

export const HowToUseSection: React.FC = () => {
    return (
        <>
            <h2>How to use the Omni-Opener</h2>
            <ol>
                <li>Check that there is nothing on the platform by looking at it, or running a palm along it</li>
                <li>
                    Make sure the Omni-Opener is plugged in and switched on. The blue light means that the omni-opener
                    is waiting and ready to be used!
                </li>
                <li>Open the door of the omni-opener by pressing it until you hear a “click”.</li>
                <li>Place the item that you wish to open on the platform inside</li>
                <li>Shut the door of the omni-opener by pressing again until you hear a “click”</li>
                <li>
                    The light will turn red to indicate that it is busy opening the object placed inside. NOTE: If the
                    door is not fully closed, the omni-opener will not open the object.
                </li>
                <li>
                    When the light turns green, your object is open and ready to collect. Open the door by pressing
                    until you hear a “click”.
                </li>
                <li>
                    You can now collect your object. The lid will be balanced on the opened object - don’t worry if it
                    falls off.
                </li>
                <li>
                    The green light will remain on until everything is removed from the opener. Remove lid from platform
                    if it fell off.
                </li>
            </ol>
            <CenteredFigure
                src={userInteraction}
                alt={'User Interaction'}
                caption={'User Interaction'}
                styles={{ width: '80%' }}
            />
        </>
    );
};
