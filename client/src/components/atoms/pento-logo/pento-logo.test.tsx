import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { PentoLogo } from './pento-logo';

describe('pento logo component', () => {
    it('renders correctly', () => {
        const { getAllByAltText } = render(<PentoLogo />);
        getAllByAltText('Logo');
    });
});
