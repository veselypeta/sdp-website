import * as React from 'react';
import { ImprovementSection } from './sections/improvement';
import { VideosSection } from './sections/videos';
import { UserTestsSection } from './sections/user-tests';

const Evaluation: React.FC = () => {
    return (
        <>
            <h1>Evaluation</h1>
            <UserTestsSection />
            <ImprovementSection />
            <VideosSection />
        </>
    );
};

export default Evaluation;
