import React from 'react';
import { CenteredFigure } from '../../../../../../atoms/centered-figure';
import slackLogo from '../../../../../../../images/slack-logo.png';
import slackThread from '../../../../../../../images/slack-thread.png';
import slackReacts from '../../../../../../../images/slack-reacts.png';
import slackPoll from '../../../../../../../images/slack-poll.png';
import slackPricing from '../../../../../../../images/slack-pricing.png';

export const SlackSection: React.FC = () => {
    return (
        <>
            <h4>Slack</h4>
            <CenteredFigure src={slackLogo} alt="slack logo" styles={{ width: '150px' }} />
            <p>
                Slack is an instant messaging platform, available on a range of devices, that utilises channels and
                threads to focus and streamline work-place discussion to increase productivity through its ability to
                keep discussions on-topic. This was our main tool of communication, allowing our team to coordinate
                physical meetings of sub-teams and allow us to check-in our individual progress for upcoming Demo
                deadlines.
            </p>
            <CenteredFigure src={slackThread} alt="Slack-Thread" styles={{ width: '100%' }} caption="Slack Threads" />
            <p>
                Slack’s fun and interactive react feature encourages a more friendly work environment with its
                wide-range of emotes and even allowing custom emotes you can add yourself; not only does it allow for
                instant feedback on messages that does not clog up threads with irrelevant discussions, it was way to
                break down barriers and allow for a more sociable way approach to our project development.
            </p>
            <CenteredFigure src={slackReacts} alt="Slack-Reacts" styles={{ width: '50%' }} caption="Slack Reacts" />
            <p>
                Slack also allows for a range of existing productivity and workflow applications to be integrated within
                itself, such as Simple Poll, an app that allows the creation of custom polls which allowed us to
                simplify discussions where multiple options were being considered without wasting time and space typing
                out responses.
            </p>
            <CenteredFigure
                src={slackPoll}
                alt="Slack-Poll"
                styles={{ width: '100%' }}
                caption="Simple Poll in action"
            />
            <p>
                Although Slack was a great tool for our needs, the free version we were using has a space limit which
                caps the message look-back at 10,000 most recent messages in your workspace. This limit was not hit
                until near the end of our project and luckily did not impact us heavily but if we were to use this tool
                in our real work environment, perhaps in a workspace involving several departments within a company;
                this limit can be a huge issue especially if you were to use a channel for import announcements you wish
                to have a record of, as Slack does not discriminate between messages and is entirely first-on first-out
                based on which messages are most recent.
            </p>
            <p>
                If we were a realistic small start up, to upgrade to the paid package allowing messages to be archived
                and kept would be a totally uneconomical decision as it has a price depending on how many staff you have
                employed. Slack Standard for our team of 10 people would have cost us £252 for the three month duration
                of this project, based on the billed monthly plan, which is a price way too high considering our actual
                system cost a fraction of this price tag.
            </p>
            <CenteredFigure
                src={slackPricing}
                alt="Slack-Pricing"
                styles={{ width: '100%' }}
                caption="Slack upgrade scheme"
            />

            <p>
                All these team management tools organising who does what are pretty useless without some way to share
                and collaborate the work done remotely. To allow simultaneous editing and sharing we decided to use
                three systems: for our code we used Git to track our share our software development, Fusion360 for our
                hardware CAD designs, and for all our reports, research and any videos/graphics our team had a shared
                Google Drive folder.
            </p>
        </>
    );
};
