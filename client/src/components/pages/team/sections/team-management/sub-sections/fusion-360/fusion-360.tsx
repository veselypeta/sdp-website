import React from 'react';
import fusionLogo from '../../../../../../../images/fusion-logo.png';
import { CenteredFigure } from '../../../../../../atoms/centered-figure';

export const Fusion360Section: React.FC = () => {
    return (
        <>
            <h4>Fusion360</h4>
            <CenteredFigure src={fusionLogo} alt="Fusion Logo" styles={{ width: '150px' }} />
        </>
    );
};
