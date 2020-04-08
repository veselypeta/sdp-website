import React from 'react';
import Home from '../home';
import { renderWithRouter } from '../../../../test/utils/render-with-router';
import '@testing-library/jest-dom/extend-expect';

describe('home page', () => {
    it('renders correctly', () => {
        const { getByText } = renderWithRouter(<Home />);
        getByText('PENTO');
    });
});
