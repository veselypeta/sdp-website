import React from 'react';
import { TrelloSection } from './sub-sections/trello';
import { SlackSection } from './sub-sections/slack';
import { GoogleDriveSection } from './sub-sections/google-drive';
import { GitSection } from './sub-sections/git';
import { Fusion360Section } from './sub-sections/fusion-360';

export const TeamManagementSection: React.FC = () => {
    return (
        <>
            <h2>Team Management</h2>
            <p>
                From the start we as a team thought it was critical to have some form of communication and team
                organisational tool to help us coordinate effectively without the need of frequent face-to-face meetings
                due to the busy nature of being a student. The two most vital tools we have used extensively to
                accomplish this are Slack and Trello as well as other software that enabled us to work effectively and
                keep us organised.
            </p>
            <TrelloSection />
            <SlackSection />
            <GoogleDriveSection />
            <GitSection />
            <Fusion360Section />
        </>
    );
};
