import React, { CSSProperties } from 'react';

interface Props {
    src: string;
    alt: string;
    caption?: string | JSX.Element;
    styles?: CSSProperties;
}

export const CenteredFigure: React.FC<Props> = (props: Props) => {
    return (
        <figure className="text-center">
            <a href={props.src}>
                <img src={props.src} className="figure-img" alt={props.alt} style={props.styles} />
            </a>
            {props.caption && <p className="figure-caption">{props.caption}</p>}
        </figure>
    );
};
