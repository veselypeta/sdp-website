import * as React from 'react';
import { OverallExpenditureSection } from './sections/overall-expenditude';

const Budget: React.FC = () => {
    return (
        <>
            <h1>Budget</h1>
            <OverallExpenditureSection />
        </>
    );
};

export default Budget;
