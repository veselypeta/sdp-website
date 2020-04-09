import * as React from 'react';
import { ImprovementSection } from './sections/improvement';
import { VideosSection } from './sections/videos';

const Evaluation: React.FC = () => {
    return (
        <>
            <h1>Evaluation</h1>
            <ImprovementSection />
            <VideosSection />
        </>
    );
};

export default Evaluation;
