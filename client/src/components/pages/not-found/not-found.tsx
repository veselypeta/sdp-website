import * as React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
    return (
        <>
            <h1>Not Found</h1>
            <Link to="/" style={{ fontWeight: 'bold' }}>
                Go Back Home
            </Link>
        </>
    );
};

export default NotFound;
