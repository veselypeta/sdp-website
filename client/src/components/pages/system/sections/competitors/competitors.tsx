import React from 'react';
import omniAccessibility from '../../../../../images/omni-accessibility.png';
import competitorPricing from '../../../../../images/competitor-pricing.png';
import sixInOne from '../../../../../images/6in1.png';
import roboTwist from '../../../../../images/robot-twist.png';
import multiFunc from '../../../../../images/multi-func.png';
import { CenteredFigure } from '../../../../atoms/centered-figure';
import { Row, Col } from 'react-bootstrap';

export const CompetitorsSection: React.FC = () => {
    return (
        <>
            <h2>Competitors</h2>
            <p>
                In terms of marketability, we are confident the Omni-Opener has a unique selling point and features
                which can be of huge benefit to target users. Because we wanted our system to be as accessible as
                possible, we felt it was hugely important to research our potential competitors and to highlight what we
                felt they succeeded and failed at. This reassured us that not only is our product marketable but also
                that we would be able to avoid as many issues they raise as possible.
            </p>
            <p>
                In our research, we found ~15 similar products to the Omni-Opener in terms of functionality and aims. We
                populated a spreadsheet with these products, and information about them such as their price,
                functionality, comparison rating to our product, if they were made by a for-profit or not-for-profit
                manufacturer, their successes and their failures. A snippet of the spreadsheet can be seen here. There
                are many more variations on each but we focused on the most similar items. This ranged from small rubber
                circles intended to reduce grip strength needed to open jars by hand, to manual multi-functional helper
                tools, to automated jar or can openers. What we found overwhelmingly was that there are rarely solutions
                to opening on the market currently that are both multi-functional and automated. In fact, hardly any
                systems are automated to the extent of the Omni-Opener, regardless of functionality.
            </p>
            <CenteredFigure src={competitorPricing} alt="Competitor Pricing" styles={{ width: '80%' }} />
            <p>
                We have detailed below what we felt were the three most similar solutions to the Omni-Opener: the
                RoboTwist: an automated jar opener, a ‘6-in-1 Opener’: a multi-functional helper tool to ease the
                opening of jars, bottles, cans, etc., and a ‘Gripper + Multi-Functional Bottle Opener’: a three-piece
                set consisting of a jar opener/gripper, silicone gripping sheets, and a bottle opener.
            </p>
            <CenteredFigure src={omniAccessibility} alt="Omni Accessibility" styles={{ width: '100%' }} />
            <Row>
                <Col xs={4}>
                    <CenteredFigure src={sixInOne} alt="6 in 1" styles={{ width: '100%' }} caption="6 in 1" />
                </Col>
                <Col xs={4}>
                    <CenteredFigure src={roboTwist} alt="Robo Twist" styles={{ width: '100%' }} caption="RoboTwist" />
                </Col>
                <Col xs={4}>
                    <CenteredFigure
                        src={multiFunc}
                        alt="Multi Func"
                        styles={{ width: '100%' }}
                        caption="Multi-Func and Bottle Opener"
                    />
                </Col>
            </Row>
            <p>
                From the identified products, we felt the RoboTwist is the closest to our product, as it is an automated
                jar opener. However, we don’t feel the product is as accessible as ours. It still requires the user to
                handle the product itself and balance it on top of the jar to be opened. It also accepts a limited range
                of jar sizes and seems unlikely to work on jars of non-circular designs. Our design requires a user to
                simply place an object inside, and lightly push the door to open and shut. The RoboTwist also doesn’t
                deal with safety concerns as the Omni-Opener does, and it would be easy to operate the RoboTwist on, for
                example, a hand that was stuck. For any user with dexterity or reaction time issues, this could be
                dangerous.
            </p>
            <p>
                In terms of other automated solutions on the market, there were automated can and tin openers but no
                automated jar openers other than the RoboTwist, and no automated bottle openers that we could find.
                Multi-functional solutions we found were mostly manual - like the helper tools above. These are both
                well-designed tools with multiple openers in one - however, they all merely reduce the force, grip, or
                dexterity required to open objects - the user still has to have quite a decent level of each to use
                them.
            </p>
            <p>
                The Omni-Opener is fully automated, and handles jars of a range of sizes, shapes, and materials, and the
                grippers have enough range to also open bottles. It is multi-functional and requires barely any
                dexterity or mobility from its user.
            </p>
        </>
    );
};
