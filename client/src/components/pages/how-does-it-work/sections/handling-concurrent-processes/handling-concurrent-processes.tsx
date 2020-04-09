import React from 'react';
import threadModel from '../../../../../images/thread-state-model.svg';
import { CenteredFigure } from '../../../../atoms/centered-figure';

export const HandlingConcurrentProcesses: React.FC = () => {
    return (
        <>
            <h2>Handling Concurrent Processes</h2>
            <p>
                A big problem with this project was to design a way in which we control different parts of the robot at
                the same time. For example; we needed to be able to monitor the state of the door while the main process
                was running so that if the door became open we could safely stop all the motors and prevent injury to
                the user.
            </p>
            <p>
                The solution we decided to take was to create individual python scripts for each ‘task’ that we needed
                to run concurrently. Then each of these scripts would be run as a thread along with the main thread of
                the robot.
            </p>

            <p>
                To manage state between concurrently executing threads, we chose to keep it as simple as possible to not
                add new complexity. We decided on having ‘global state files’ to which each thread would read/write from
                to get and update the ‘state’. For example the thread that would monitor the state of the door. The
                thread would monitor events from the GPIO pins on the Raspberry Pi. When a ‘RISING’ or ‘FALLING’ event
                was triggered the thread would write the state of the door (open, closed) to a file ‘door_state’. Then
                for example another thread responsible for controlling the colour of a LED would read the contents of
                this file and set the colour of the LED based on the value stored in the file. In this way we control
                the whole operation of the robot; each thread reads the state from the files and will run its logic and
                will update any required state which is then picked up by other running threads.
            </p>
            <CenteredFigure src={threadModel} alt="thread-model" caption="Thread State Model" />
        </>
    );
};
