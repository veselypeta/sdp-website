import React from 'react';
import Budget from '../budget';
import { renderWithRouter } from '../../../../test/utils/render-with-router';
import '@testing-library/jest-dom/extend-expect';

describe('budget page', () => {
    it('renders correctly', () => {
        const { getByText } = renderWithRouter(<Budget />);
        getByText('Budget');
    });
});
