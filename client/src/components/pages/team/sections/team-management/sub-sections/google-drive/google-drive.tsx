import React from 'react';
import { CenteredFigure } from '../../../../../../atoms/centered-figure';
import googleDriveLogo from '../../../../../../../images/google-drive-logo.png';

export const GoogleDriveSection: React.FC = () => {
    return (
        <>
            <h4>Google Drive</h4>
            <CenteredFigure src={googleDriveLogo} alt="Google Drive Logo" styles={{ width: '150px' }} />
            <p>
                Is a great platform that allows us to easily and seamlessly share resources and collaborate on documents
                together in real time. We used it throughout the project to upload documents, images and other files
                allowing for quick sharing and effective remote working across the team. We used it as our one source of
                truth for all knowledge and documents created for the project.
            </p>
        </>
    );
};
