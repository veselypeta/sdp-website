import * as React from 'react';
import logo from '../../images/logo.png';

const Home: React.FC = () => {
    return (
        <>
            <h1>Home Page</h1>
            <img src={logo} style={{ width: 400 }} alt="Pento-Icon" />
        </>
    );
};

export default Home;
