import React, { CSSProperties } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { OverlayChildren } from 'react-bootstrap/Overlay';

interface Props {
    src: string;
    alt: string;
    caption?: string | JSX.Element;
    styles?: CSSProperties;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderTooltip: OverlayChildren = (props: any): JSX.Element => {
    return (
        <Tooltip id="button-tooltip" {...props}>
            Click to expand
        </Tooltip>
    );
};

export const CenteredFigure: React.FC<Props> = (props: Props) => {
    return (
        <OverlayTrigger placement="top" delay={{ show: 40, hide: 10 }} overlay={renderTooltip}>
            <figure className="text-center">
                <a href={props.src}>
                    <img src={props.src} className="figure-img" alt={props.alt} style={props.styles} />
                </a>
                {props.caption && <p className="figure-caption">{props.caption}</p>}
            </figure>
        </OverlayTrigger>
    );
};
