import React from 'react';

export const Footer: React.FC = () => {
    const footerStyles: React.CSSProperties = {
        marginTop: 'auto',
    };
    return (
        <footer id="sticky-footer" className="py-4 bg-dark text-white-50" style={footerStyles}>
            <div className="container text-center">
                <p>Copyright &copy; Pento 😜</p>
            </div>
        </footer>
    );
};
