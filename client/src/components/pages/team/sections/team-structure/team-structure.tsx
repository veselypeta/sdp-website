import React from 'react';

export const TeamStructureSection: React.FC = () => {
    const headerStyle: React.CSSProperties = {
        fontWeight: 'bold',
    };
    return (
        <>
            <h2>Team Structure</h2>
            <p style={headerStyle}>Manager (Adam)</p>
            <ul>
                <li>Organisation of Sub-Teams</li>
                <li>Organisation of weekly meetings</li>
                <li>Ensuring good productive work and collaboration</li>
            </ul>
            <p style={headerStyle}>Electronic Team (Petr, Han, Bailey)</p>
            <ul>
                <li>Responsible for writing and testing software</li>
                <li>Sourcing, testing and implementing sensors</li>
                <li>Creating promotional website</li>
            </ul>
            <p style={headerStyle}>Hardware Team (Nimrod, Dylan, JD)</p>
            <ul>
                <li>Designing CAD models</li>
                <li>Fabrication of parts (Laser-cutting, moulding)</li>
                <li>Assembling and testing structure</li>
            </ul>
            <p style={headerStyle}>Marketing Team (Bailey, Jen, Robyn, Adam)</p>
            <ul>
                <li>Conducting Market Research</li>
                <li>Create Logo and branding</li>
                <li>Investigate Feasibility</li> <li>Budgeting</li>
            </ul>
        </>
    );
};
