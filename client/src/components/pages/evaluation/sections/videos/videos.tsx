import React from 'react';

export const VideosSection: React.FC = () => {
    return (
        <>
            <h2>Videos</h2>
            <div className="text-center" style={{ display: 'flex', padding: '10px' }}>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/779Nh1gHEP4"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/rmhJTBzYY3U"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </>
    );
};
