import * as React from 'react';
import { OverallExpenditureSection } from './sections/overall-expenditude';
import { IndustryManufacturingSection } from './sections/industy-manufacturing-retail-estimation';
import { References } from './sections/references';

const Budget: React.FC = () => {
    return (
        <>
            <h1>Budget</h1>
            <OverallExpenditureSection />
            <IndustryManufacturingSection />
            <References />
        </>
    );
};

export default Budget;
