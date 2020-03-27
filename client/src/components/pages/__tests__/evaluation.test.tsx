import React from 'react';
import Evaluation from '../evaluation';
import { renderWithRouter } from '../../../../test/utils/render-with-router';
import '@testing-library/jest-dom/extend-expect';

describe('evaluation page', () => {
    it('renders correctly', () => {
        const { getByText } = renderWithRouter(<Evaluation />);
        getByText('Evaluation');
    });
});
