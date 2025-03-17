import React, {ReactNode} from "react";
import styled from "styled-components";
import {StackLayout, StackLayoutProps} from "./StackLayout";

interface FlexLayoutProps extends StackLayoutProps {
    children: ReactNode;
    className?: string;
    spacing?: number;
    direction?: "Horizontal" | "Vertical";
    alignItems?: "Start" | "Center" | "End" | "Stretch" | "Unset";
    alignContent?: "Start" | "Center" | "End" | "Stretch" | "Unset";
    justifyItems?:
        | "Start"
        | "Center"
        | "End"
        | "Stretch"
        | "Space-Between"
        | "Space-Around"
        | "Space-Evenly"
        | "Unset";
    justifyContent?:
        | "Start"
        | "Center"
        | "End"
        | "Stretch"
        | "Space-Between"
        | "Space-Around"
        | "Space-Evenly"
        | "Unset";
    wrap?: "wrap" | "nowrap";
    flex?: number;
    style?: React.CSSProperties;
}

const FlexLayoutElement = styled(StackLayout)<FlexLayoutProps>`
    display: flex;
    flex-direction: ${({direction}) =>
            direction === "Vertical" ? "column" : "row"};
    gap: ${({spacing}) => `${spacing}px`};
    align-items: ${({alignItems}) => alignItems!.toLowerCase()};
    justify-content: ${({justifyContent}) => justifyContent!.toLowerCase()};
    justify-items: ${({justifyItems}) => justifyItems!.toLowerCase()};
    align-content: ${({alignContent}) => alignContent!.toLowerCase()};
    flex-wrap: ${({wrap}) => wrap!.toLowerCase()};
    flex: ${({flex}) => flex};
    overflow: ${({overflow}) => overflow!.toLowerCase()};
`;

export function FlexLayout({
                               children,
                               className,
                               spacing = 0,
                               direction = "Horizontal",
                               alignItems = "Unset",
                               alignContent = "Unset",
                               justifyItems = "Unset",
                               justifyContent = "Unset",
                               wrap = "wrap",
                               flex = 0,
                               style = {},
                               overflow = "Unset",
                               ...props
                           }: Readonly<FlexLayoutProps>) {
    return (
        <FlexLayoutElement
            className={["Misc__FlexLayout", "FlexLayout", className].join(" ")}
            spacing={spacing}
            direction={direction}
            alignItems={alignItems}
            alignContent={alignContent}
            justifyItems={justifyItems}
            justifyContent={justifyContent}
            wrap={wrap}
            flex={flex}
            style={style}
            overflow={overflow}
            {...props}
        >
            {children}
        </FlexLayoutElement>
    );
}
