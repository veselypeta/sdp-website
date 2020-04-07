import React from 'react';
import HowDoesItWork from '../how-does-it-work';
import { renderWithRouter } from '../../../../test/utils/render-with-router';
import '@testing-library/jest-dom/extend-expect';

describe('how does it work page', () => {
    it('renders correctly', () => {
        const { getByText } = renderWithRouter(<HowDoesItWork />);
        getByText('How Does It Work?');
    });
});
