import * as React from 'react';
import { Navigation } from '../../organisms/navigation';
import { Container } from 'react-bootstrap';

interface Props {
    children: React.ReactNode;
}

export const PageLayout: (p: Props) => JSX.Element = ({ children }: Props) => {
    return (
        <>
            <Navigation />
            <Container>{children}</Container>
        </>
    );
};
