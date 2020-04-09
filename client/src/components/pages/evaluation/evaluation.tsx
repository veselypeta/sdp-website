import * as React from 'react';
import { ImprovementSection } from './sections/improvement';
import { VideosSection } from './sections/videos';
import { UserTestsSection } from './sections/user-tests';
import { TestingSection } from './sections/testing';

const Evaluation: React.FC = () => {
    return (
        <>
            <h1>Evaluation</h1>
            <TestingSection />
            <UserTestsSection />
            <ImprovementSection />
            <VideosSection />
        </>
    );
};

export default Evaluation;
