import React from 'react';
import { ConceptSection } from './sections/concept';
import { FunctionalitySection } from './sections/functionality';
import { CompetitorsSection } from './sections/competitors';
import { UserInterfaceSection } from './sections/user-interface';
import { FutureDevelopmentSection } from './sections/future-development';

const System: React.FC = () => {
    return (
        <>
            <h1>System</h1>
            <ConceptSection />
            <FunctionalitySection />
            <CompetitorsSection />
            <UserInterfaceSection />
            <FutureDevelopmentSection />
        </>
    );
};

export default System;
