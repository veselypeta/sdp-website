import * as React from 'react';
import { TeamStructureSection } from './sections/team-structure';
import { TeamManagementSection } from './sections/team-management';
import { GroupPhoto } from '../../organisms/group-photo';

const Team: React.FC = () => {
    return (
        <>
            <h1>Team</h1>
            <GroupPhoto />
            <TeamStructureSection />
            <TeamManagementSection />
        </>
    );
};

export default Team;
