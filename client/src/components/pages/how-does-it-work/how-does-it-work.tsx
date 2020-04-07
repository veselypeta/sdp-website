import * as React from 'react';
import { HandlingConcurrentProcesses } from './sections/handling-concurrent-processes';
import { SoftwareOperation } from './sections/software-operation';

const HowDoesItWork: React.FC = () => {
    return (
        <>
            <h1>How Does It Work?</h1>
            <SoftwareOperation />
            <HandlingConcurrentProcesses />
        </>
    );
};

export default HowDoesItWork;
