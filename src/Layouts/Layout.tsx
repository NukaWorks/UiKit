import React, {ReactNode} from "react";
import styled from "styled-components";
import {CommonTypes} from "../Common/Interfaces";

export interface LayoutProps {
    children?: ReactNode;
    width?: CommonTypes.CSSSize;
    height?: CommonTypes.CSSSize;
    className?: string;
    overflow?: "Unset" | "Hidden" | "Scroll" | "Auto";
    minWidth?: CommonTypes.CSSSize;
    minHeight?: CommonTypes.CSSSize;
    maxWidth?: CommonTypes.CSSSize;
    maxHeight?: CommonTypes.CSSSize;
    style?: React.CSSProperties;
}

const LayoutElement = styled.div<LayoutProps>`
    display: block;
    overflow: ${({overflow}) => overflow?.toLowerCase()};
    width: ${({width}) => (width ? width + "px" : "auto")};
    height: ${({height}) => (height ? height + "px" : "auto")};
    min-width: ${({minWidth}) => (minWidth ? minWidth + "px" : "auto")};
    min-height: ${({minHeight}) => (minHeight ? minHeight + "px" : "auto")};
    max-width: ${({maxWidth}) => (maxWidth ? maxWidth + "px" : "auto")};
    max-height: ${({maxHeight}) => (maxHeight ? maxHeight + "px" : "auto")};
`;

export function Layout({
                           children,
                           overflow = "Unset",
                           width = "Unset",
                           height = "Fit-Content",
                           minWidth = "Unset",
                           minHeight = "Unset",
                           maxWidth = "Unset",
                           maxHeight = "Unset",
                           className,
                           style = {},
                       }: Readonly<LayoutProps>) {
    return (
        <LayoutElement
            className={["Layouts__Layout", "Layout", className].join(" ")}
            overflow={overflow}
            width={width}
            height={height}
            minWidth={minWidth}
            minHeight={minHeight}
            maxWidth={maxWidth}
            maxHeight={maxHeight}
            style={style}
        >
            {children}
        </LayoutElement>
    );
}
