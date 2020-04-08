import * as React from 'react';
import { IntroSection } from './sections/intro';
import { DescriptionSection } from './sections/description';

const Home: React.FC = () => {
    return (
        <>
            <IntroSection />
            <DescriptionSection />
        </>
    );
};

export default Home;
