import * as React from 'react';
import rpiConnectionDiagram from '../../../images/rpi-connection-diagram.svg';

const HowDoesItWork: React.FC = () => {
    return (
        <>
            <h1>How Does It Work?</h1>
            <img src={rpiConnectionDiagram} alt="connection-diagram" />
        </>
    );
};

export default HowDoesItWork;
