import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { CenteredFigure } from '../../../../atoms/centered-figure';
import mdf from '../../../../../images/mdf.jpg';
import m12Threads from '../../../../../images/m12threads.png';
import mould from '../../../../../images/mould.png';
import expenditureGraph from '../../../../../images/expenditureGraph.png';
import costBreakdown from '../../../../../images/budget-breakdown.png';

export const OverallExpenditureSection: React.FC = () => {
    return (
        <>
            <h2>Overall Expenditure</h2>
            <p>
                Throughout the development of the project development costs have been kept relatively low due to the
                considerations taken when choosing what material to prototype with. The frame, gears and platforms are
                all laser-cut parts of MDF allowing us the precision needed for intricate mechanisms like the lifting
                base and grippers where we have utilised calculated gear ratios to effectively and efficiently carry out
                their respective tasks.
            </p>

            <p>
                The use of MDF was critical in this project as it allowed cheap and quick prototyping for these gear
                ratios without the risk of the gears splintering under pressure as the characteristics of this material
                promote stable manufacturing due to there being no set grain within the boards (as pictured). In total
                we purchased 5 varying sizes of MDF board for a total of £24.50, and once factoring in the price of
                using the laser-cutter, constructing all parts from MDF was a total of £54.50. Although this accounted
                for over half of what we spent, it would be hard to find any other material beating this price for the
                quality and uses we wanted.
            </p>

            <CenteredFigure
                src={mdf}
                alt="mdf-image"
                styles={{ width: '35%' }}
                caption={
                    <>
                        Image via{' '}
                        <a href="https://www.addicted2decorating.com/mdf-vs-plywood-differences-pros-and-cons-and-when-to-use-what.html">
                            addicted2decorating
                        </a>
                    </>
                }
            />

            <p>
                The rails on which the platforms run up and down are cut from 5 1m M-12 threaded bars which we spent a
                total of £16.59 on, we also reused these threaded bars for the grippers to extend and retract on and
                also for our top grippers base to spin on. This design and purchasing decision once again allowed for
                little waste but also enough material to test and iterate our designs on.
            </p>

            <CenteredFigure
                src={m12Threads}
                alt="m12-threads-image"
                caption="M12 threaded bars in the system"
                styles={{ width: '50%' }}
            />

            <p>
                One of the most critical points of contention was the material the actual gripping part of the grippers
                was made out of; we required a material which would both need to actually grip onto a variety of lids
                and then also be rigid enough to create the friction needed to rotate the lid on the object. The
                decision to use silicon was a result of the brainstorming stemming from these core needs, with the added
                benefit of being cheap enough to allow many iterations for different sizes and thicknesses.
            </p>

            <p>
                We initially 3D printed a set of 4 moulds which the grippers were formed in but realised that if we
                wanted to go with a thinner designer then it would be uneconomical to reproduce more of these 3D printed
                sets, so we decided to switch to a cheaper alternative with vacuum formed moulds. We spent £10 on the 4
                3D printed moulds before switching to the cheaper vacuum formed moulds at the cost of £1 per mould, for
                a total of £11 on moulds as production of our system was cut short before fully exploring this branch of
                iteration. In combination with the cost of the silicon used, the grippers cost us £17.78.
            </p>

            <CenteredFigure
                src={mould}
                alt="gripper-moulds-image"
                styles={{ width: '50%' }}
                caption="gripper mould CAD mock-up"
            />

            <p>
                Had the production of our system continued as normal, we would have continued to keep inline with our
                forecast laid out at the end of Demo 2 with adjustments to our expenditure in weeks six and seven.
                Design on a circuit board for controlling the LEDs and sensors would have been started and iterated
                alongside the other grip designs and the allocation for our marketing of the system being spent on
                promoting our system. An overview of the forecast can be seen below:
            </p>

            <Row style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Col xs={6}>
                    <CenteredFigure src={expenditureGraph} alt="Expenditure Graph" styles={{ width: '100%' }} />
                </Col>
                <Col xs={6}>
                    <CenteredFigure src={costBreakdown} alt="CostBreakdown" styles={{ width: '100%' }} />
                </Col>
            </Row>
        </>
    );
};
