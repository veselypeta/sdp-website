import * as React from 'react';
import { HandlingConcurrentProcesses } from './sections/handling-concurrent-processes';
import { SoftwareOperation } from './sections/software-operation';
import { HowToUseSection } from './sections/how-to-use';

const HowDoesItWork: React.FC = () => {
    return (
        <div style={{ paddingBottom: '40px' }}>
            <h1>How Does It Work?</h1>
            <SoftwareOperation />
            <HandlingConcurrentProcesses />
            <HowToUseSection />
        </div>
    );
};

export default HowDoesItWork;
