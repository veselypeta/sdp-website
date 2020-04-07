import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRouter } from '../../../../test/utils/render-with-router';
import { Navigation } from './navigation';

describe('navigation pannel', () => {
    it('renders all text correctly', async () => {
        const { getByText, getByAltText } = renderWithRouter(<Navigation />);

        // renders image
        getByAltText('Logo');

        // renders links
        getByText('Home');
        getByText('Budget');
        getByText('Evaluation');
        getByText('How Does It Work?');
        getByText('System');
        getByText('Team');
        getByText('Comments');

        // renders title
        getByText('Omni-Opener');
    });

    it('links to correct place', () => {
        const { getByText } = renderWithRouter(<Navigation />);

        const homeLink = getByText('Home').closest('a');
        expect(homeLink).toHaveAttribute('href', '/');

        const budgetLink = getByText('Budget').closest('a');
        expect(budgetLink).toHaveAttribute('href', '/budget');

        const evaluationLink = getByText('Evaluation').closest('a');
        expect(evaluationLink).toHaveAttribute('href', '/evaluation');

        const howDoesItWorkLink = getByText('How Does It Work?').closest('a');
        expect(howDoesItWorkLink).toHaveAttribute('href', '/how-does-it-work');

        const systemLink = getByText('System').closest('a');
        expect(systemLink).toHaveAttribute('href', '/system');

        const teamLink = getByText('Team').closest('a');
        expect(teamLink).toHaveAttribute('href', '/team');

        const commentsLink = getByText('Comments').closest('a');
        expect(commentsLink).toHaveAttribute('href', '/comments');
    });
});
