import * as React from 'react';
import Team from '../team';
import { renderWithRouter } from '../../../../test/utils/render-with-router';
import '@testing-library/jest-dom/extend-expect';

describe('team page', () => {
    it('renders correctly', () => {
        const { getByText } = renderWithRouter(<Team />);
        getByText('Team');
    });
});
