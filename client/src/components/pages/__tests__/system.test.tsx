import React from 'react';
import System from '../system';
import { renderWithRouter } from '../../../../test/utils/render-with-router';
import '@testing-library/jest-dom/extend-expect';

describe('system page', () => {
    it('renders correctly', () => {
        const { getByText } = renderWithRouter(<System />);
        getByText('System');
    });
});
