import React, {FunctionComponent, ReactNode} from "react";
import {Layout} from "./Layout";
import styled from "styled-components";

interface StackLayoutProps {
    children: ReactNode;
    className?: string;
    spacing?: number;
    direction?: "Horizontal" | "Vertical";
    style?: React.CSSProperties;
}

const StackLayoutElement = styled(Layout)<StackLayoutProps>`
    display: flex;
    flex-direction: ${({direction}) =>
            direction === "Vertical" ? "column" : "row"};
    gap: ${({spacing}) => `${spacing}px`};
`;

export const StackLayout: FunctionComponent<StackLayoutProps> = ({
                                                                     children,
                                                                     className,
                                                                     spacing = 0,
                                                                     direction = "Horizontal",
                                                                     style = {},
                                                                 }) => {
    return (
        <StackLayoutElement
            className={["Layouts__StackLayout", "StackLayout", className].join(" ")}
            spacing={spacing}
            direction={direction}
            style={style}
        >
            {children}
        </StackLayoutElement>
    );
};
