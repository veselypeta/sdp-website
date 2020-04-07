import React, { CSSProperties } from 'react';

interface Props {
    src: string;
    alt: string;
    caption?: string;
    styles?: CSSProperties;
}

export const CenteredFigure: React.FC<Props> = (props: Props) => {
    return (
        <figure className="text-center">
            <img src={props.src} className="figure-img" alt={props.alt} style={props.styles} />
            {props.caption && <p className="figure-caption">{props.caption}</p>}
        </figure>
    );
};
