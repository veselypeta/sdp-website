import React from 'react';

export const ImprovementSection: React.FC = () => {
    return (
        <>
            <h2>Areas of Improvement</h2>

            <h4>Reliability</h4>
            <p>
                As the project grew arms and legs we struggled with reliability, especially with sensors and the
                Raspberry Pi. We repeatedly had this working one day, only for it not to work the next and be scratching
                our heads as to why. Firstly, we had to have our Pi replaced twice due to issues which meant we lost a
                lot of time and work on diagnosis and repairs. Also we would have issues being able to connect to the
                motors correctly through the SMBus connection provided by the motor board. Things did improve over time
                and we were able to develop quickly and focus on the product, however this did slow us down in the
                beginning.
            </p>

            <h4>Complicated Assemply and Setup</h4>
            <p>
                As you can probably imagine the setup of the robot from individual components was quite complicated and
                difficult to manage. It would take a long time to assemble something as well as to disassemble and
                reassemble to add new components or to perform repairs. The opener is built with large wooden laser-cut
                pieces, but uses a lot of small and fragile lego pieces which have to be assembled in a specific way due
                to the design. However once we had established a good design which was strong and reliable we rarely had
                to disassemble anything and could focus on building new sections.
            </p>

            <h4>Changes to the final design</h4>
            <p>
                We made some very committed decisions early on which shaped our project going forward. Chief among was
                to use laser-cut MDF and Lego to build the bulk of the robot. This has great advantages; rapid
                prototyping and simple design, but does lack some rigidity in the lego, especially in the gears and
                connecting pieces.
            </p>
        </>
    );
};
