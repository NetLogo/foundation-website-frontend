import type { FC, ReactNode, CSSProperties } from 'react';
import './styles/timeline.css';
import { useAutoAnimate } from '@formkit/auto-animate/react'

export interface TimelineItemData {
    title: string;
    date?: string;
    description?: string;
    href?: string;
}

interface TimelineItemProps {
    item?: TimelineItemData;
    children?: ReactNode;
}

export const TimelineItem: FC<TimelineItemProps> = ({ item, children }) => {
    if (!item && !children) {
        return null;
    }
    if (!item) return <li>{children}</li>;

    return (
        <li>
            <>
                {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                        {item.title}
                    </a>
                ) : (
                    <span className="timeline-title">{item.title}</span>
                )}
                {item.date && (
                    <span className="timeline-date">{item.date}</span>
                )}
                {item.description && (
                    <p className="timeline-description">{item.description}</p>
                )}
            </>
        </li>
    );
};

export interface TimelineProps {
    accentColor?: string;
    lineColor?: string;
    dotSize?: number;
    dotBorderWidth?: number;
    children?: ReactNode;
}

export const Timeline: FC<TimelineProps> = ({
    accentColor = '#22c0e8',
    lineColor = '#d4d9df',
    dotSize = 20,
    dotBorderWidth = 3,
    children,
}) => {
    const [animationParent] = useAutoAnimate<HTMLUListElement>();

    const timelineStyle = {
        '--timeline-accent-color': accentColor,
        '--timeline-line-color': lineColor,
        '--timeline-dot-size': `${dotSize}px`,
        '--timeline-dot-border-width': `${dotBorderWidth}px`,
        '--timeline-line-left': `${(dotSize / 2) + 9}px`,
        '--timeline-dot-left': `${(dotSize / 2)}px`,
    } as CSSProperties;

    return (
        <ul className="timeline" style={timelineStyle} ref={animationParent}>
            {children}
        </ul>
    );
};
