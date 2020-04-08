import React from 'react';
import { Row, Col } from 'react-bootstrap';
import badTrelloCard from '../../../../../../../images/bad-trello-card.png';
import goodTrelloCard from '../../../../../../../images/good-trello-card.png';
import goodTrelloBoard from '../../../../../../../images/good-trello-board.png';
import badTrelloBoard from '../../../../../../../images/bad-trello-board.png';
import trelloLogo from '../../../../../../../images/trello-logo.png';
import { CenteredFigure } from '../../../../../../atoms/centered-figure';

export const TrelloSection: React.FC = () => {
    return (
        <>
            <h4>Trello</h4>
            <CenteredFigure src={trelloLogo} alt="trello-logo" styles={{ width: '150px' }} />
            <p>
                Trello is a tool we used to organise our priorities and distribute work amongst the group as well as
                sub-teams. We have weekly meetings in which we would plan for work to be completed for the following
                week. We would create ‘cards’ on the board and discuss their difficulty and complexity. As the card is
                being worked on during the week it is moved across to ‘in process’ and when finished it is moved to
                ‘done’. This makes it clear to anyone who looks at the board what state the work is in and how much we
                have completed already. We usually leave comments too, to detail what has been completed.
            </p>
            <p>
                We started using this tool early and over the course of the project the entire team became more familiar
                and confident with the tool and really helped us to stay organized and focused on the project outcomes.
            </p>
            <Row>
                <Col xs={6}>
                    <CenteredFigure
                        src={badTrelloCard}
                        alt="bad-trello-card"
                        caption="Initially our cards were not very detailed and lacked important detail"
                        styles={{ width: '100%' }}
                    />
                </Col>
                <Col>
                    <CenteredFigure
                        src={goodTrelloCard}
                        alt="good-trello-card"
                        caption="Over the course of the project we improved and made detailed cards which made it clear what had to be completed"
                        styles={{ width: '100%' }}
                    />
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                    <CenteredFigure src={badTrelloBoard} alt="bad-trello-board" styles={{ width: '100%' }} />
                </Col>
                <Col>
                    <CenteredFigure src={goodTrelloBoard} alt="good-trello-board" styles={{ width: '100%' }} />
                </Col>
            </Row>
        </>
    );
};
