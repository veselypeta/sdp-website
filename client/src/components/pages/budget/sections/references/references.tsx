import React from 'react';

export const References: React.FC = () => {
    return (
        <>
            <h2>References</h2>
            <ul>
                <li>
                    <p>
                        <cite>MadeHow. How a microwave oven is made. 2020a. </cite>
                        <a
                            href="http://www.madehow.com/Volume-1/Microwave-Oven.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Source
                        </a>
                    </p>
                </li>

                <li>
                    <p>
                        <cite>MadeHow. How a washing machine is made. 2020b. </cite>
                        <a
                            href="http://www.madehow.com/Volume-1/Washing-Machine.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Source
                        </a>
                    </p>
                </li>
            </ul>
        </>
    );
};
