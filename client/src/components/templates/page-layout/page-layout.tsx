import * as React from 'react';
import { Navigation } from '../../organisms/navigation';
import { Container } from 'react-bootstrap';
import { Footer } from '../../organisms/footer';

interface Props {
    children: React.ReactNode;
}

export const PageLayout: (p: Props) => JSX.Element = ({ children }: Props) => {
    const pageStyles: React.CSSProperties = {
        backgroundColor: '#f0f0f0',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    };
    return (
        <div style={pageStyles}>
            <Navigation />
            <Container style={{ backgroundColor: 'white' }}>{children}</Container>
            <Footer />
        </div>
    );
};
