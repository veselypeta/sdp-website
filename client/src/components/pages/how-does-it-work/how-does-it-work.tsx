import * as React from 'react';
import { HandlingConcurrentProcesses } from './sections/handling-concurrent-processes';

const HowDoesItWork: React.FC = () => {
    return (
        <>
            <h1>How Does It Work?</h1>
            <HandlingConcurrentProcesses />
        </>
    );
};

export default HowDoesItWork;
