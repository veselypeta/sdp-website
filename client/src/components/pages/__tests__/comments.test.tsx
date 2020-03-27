import React from 'react';
import Comments from '../comments';
import { renderWithRouter } from '../../../../test/utils/render-with-router';
import '@testing-library/jest-dom/extend-expect';

describe('comments page', () => {
    it('renders correctly', () => {
        const { getByText } = renderWithRouter(<Comments />);
        getByText('Comments');
    });
});
