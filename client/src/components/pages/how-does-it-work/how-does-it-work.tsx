import * as React from 'react';
import { HandlingConcurrentProcesses } from './sections/handling-concurrent-processes';
import { SoftwareOperation } from './sections/software-operation';
import { HowToUseSection } from './sections/how-to-use';
import { HardwareSection } from './sections/hardware';

const HowDoesItWork: React.FC = () => {
    return (
        <div style={{ paddingBottom: '40px' }}>
            <h1>How Does It Work?</h1>
            <HowToUseSection />
            <SoftwareOperation />
            <HandlingConcurrentProcesses />
            <HardwareSection />
        </div>
    );
};

export default HowDoesItWork;
