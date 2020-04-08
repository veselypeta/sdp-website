import React from 'react';

export const Footer: React.FC = () => {
    const footerStyles: React.CSSProperties = {
        marginTop: 'auto',
    };
    return (
        <footer id="sticky-footer" className="py-4 bg-dark text-white-50" style={footerStyles}>
            <div className="container text-center">
                <span role="img" aria-label="copyright">
                    Copyright &copy; Pento 😜
                </span>
            </div>
        </footer>
    );
};
