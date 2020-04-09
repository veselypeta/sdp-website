import React from 'react';
import fusionLogo from '../../../../../../../images/fusion-logo.png';
import fusionScreenshot from '../../../../../../../images/fusion-screenshot.png';
import { CenteredFigure } from '../../../../../../atoms/centered-figure';

export const Fusion360Section: React.FC = () => {
    return (
        <>
            <h4>Fusion360</h4>
            <CenteredFigure src={fusionLogo} alt="Fusion Logo" styles={{ width: '150px' }} />
            <p>
                Fusion 360 is a professional CAD modelling software for the to create engineering designs. It is
                powerful because we can easily create some models such as coils, gears and lead-screws that are
                complicated to compute and create from scratch. Furthermore, it provides cloud servers that allow
                members to work in parallel. When a specific part is done, we just need to drag that from the cloud to
                the DESIGN scene. Fusion 360 also has built-in animation functionality that we used to make an animation
                to show other people how the system works.
            </p>
            <CenteredFigure
                src={fusionScreenshot}
                alt="Fusion Screenshot"
                styles={{ width: '80%' }}
                caption="Fusion360 CAD Software"
            />
        </>
    );
};
