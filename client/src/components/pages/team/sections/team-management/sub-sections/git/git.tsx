import React from 'react';
import { CenteredFigure } from '../../../../../../atoms/centered-figure';
import gitLogo from '../../../../../../../images/git-logo.png';
import gitExamplePr from '../../../../../../../images/git-example-pr.png';
import gitReview from '../../../../../../../images/git-review.png';

export const GitSection: React.FC = () => {
    return (
        <>
            <h4>Git</h4>
            <CenteredFigure src={gitLogo} alt="Git Logo" styles={{ width: '150px' }} />
            <p>
                Git is a version control system we used to track our software development. It is a great tool that
                allows many of us to be able to work remotely as the source code is held in a central repository. It was
                also great for upholding good coding standards as we would usually review others&apos; work before it is
                merged. Although it is a great tool, it does have a steep learning curve and not a great user experience
                for people not familiar with it and was not fully adopted across the team due to this.
            </p>
            <CenteredFigure
                src={gitExamplePr}
                alt="Git Example PR"
                styles={{ width: '60%' }}
                caption="Example PR ready for review"
            />
            <CenteredFigure
                src={gitReview}
                alt="Git Review"
                styles={{ width: '100%' }}
                caption="We would then look at changes and ensure they have good code quality"
            />
        </>
    );
};
