import React from 'react';
import NotFound from '../not-found';
import { renderWithRouter } from '../../../../test/utils/render-with-router';
import '@testing-library/jest-dom/extend-expect';

describe('Not Found Page', () => {
    it('renders correctly to screen', () => {
        const { getByText } = renderWithRouter(<NotFound />);
        getByText('Not Found');
        getByText('Go Back Home');
    });

    it('Go back home links back to homepage', async () => {
        const { findByText } = renderWithRouter(<NotFound />);
        const linkText = await findByText('Go Back Home');
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const link = linkText.closest('a')!;
        expect(link.pathname).toEqual('/');
    });
});
