import * as React from 'react';
import { TeamStructureSection } from './sections/team-structure';
import { TeamManagementSection } from './sections/team-management';

const Team: React.FC = () => {
    return (
        <>
            <h1>Team</h1>
            <TeamStructureSection />
            <TeamManagementSection />
        </>
    );
};

export default Team;
