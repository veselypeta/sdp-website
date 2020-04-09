import React from 'react';

export const UserTestsSection: React.FC = () => {
    return (
        <>
            <h2>User Tests</h2>
            <p>
                Since the target user of this product is someone that faces physical or neurological barriers to opening
                jars and bottles, user consideration was treated as central to the user interface design at all stages.
                Due to the nature of the project, the team were unable to directly perform user testing with the target
                demographic, therefore creativity was required in order to ensure that the product is truly accessible
                for the people that need it.
            </p>
            <p>
                Several methods were used in order to establish and test user needs. This allowed for a layered approach
                to user testing, roughly mimicking the user centred design framework.
            </p>
            <p>
                The first stage was to discuss the requirements of the user. After brief discussion within the team, an
                informal conversation took place between team members and medical professionals (friends of a team
                member). Evaluation of these informal interviews aided the team in narrowing down the target user set,
                establishing likely use cases, and directing research on conventions for similar products. Following
                convention in accessible technology was prioritised in order to maximise consistency, allowing users to
                learn to use the product from a familiar scenario.
            </p>
            <p>
                To supplement this, a survey was designed to be distributed online. Unfortunately due to unexpected
                circumstances, this could not be completed with users, however researching to design the questionnaire
                raised useful discussion of potential pitfalls of the design.
            </p>
            <p>
                With this information, the team was able to progress and independently research user needs. This was
                done by consulting various medical policies and following up with the physiotherapists to check for gaps
                in medical knowledge.
            </p>
            <p>
                After this stage, the team turned to the task of evaluating frustration of the user and subsequently
                minimising it. Due to circumstances, the team was restricted to conducting open interviews with other
                members of the team. Luckily, since many of the team had not yet seen the traffic light design, they
                were still able to provide authentic responses. In terms of usability goals, the team prioritised safety
                and ease of use. Thus, simplicity of the interaction was treated to be of paramount importance
                throughout evaluation.
            </p>
            <p>
                A reset button is used to allow the user to safely return to a known state (idle) from any other state.
                The reset button was found to have a fairly obvious meaning to users tested.
            </p>
            <p>
                Traffic lights provide the main method by which users are able to clearly understand the system state
                sufficiently to inform their actions. By speaking the user’s language, and directing the user’s
                pre-attentive attention toward the product, this system allows an elegant method to direct the user.
                Therefore, the evaluative task was to check that the principles of design used had successfully
                minimised the gulf of execution and evaluation as much as possible.
            </p>
            <p>
                To test this design, team members were presented with a series of traffic light diagrams as they would
                appear on the system. The interviewee would be prompted to discuss what the light led them to think
                about the system, and what they as the user should do next. On the whole, feedback indicated that
                “green” led users to believe that the process was finished and it was safe to collect the jar. Similar
                discussions and subsequent analysis were performed, leading to the team’s final decisions on traffic
                light use.
            </p>
        </>
    );
};
