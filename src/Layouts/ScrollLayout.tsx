import React, {FunctionComponent} from "react";
import styled from "styled-components";
import {Layout, LayoutProps} from "./Layout";

interface ScrollLayoutProps extends LayoutProps {
    hideScrollbar?: boolean;
}

const ScrollLayoutElement = styled(Layout)<ScrollLayoutProps>`
    display: block;
    height: 100%;
    max-height: 100vh;

    ${({hideScrollbar}) => hideScrollbar && `
        &::-webkit-scrollbar {
            width: 0px;
            background-color: transparent;
        }
    `};
`;

export const ScrollLayout: FunctionComponent<ScrollLayoutProps> = (
    {
        children,
        className,
        hideScrollbar,
        overflow = "Scroll",
        ...props
    }) => {
    return (
        <ScrollLayoutElement
            className={["Layouts__ScrollLayout", "ScrollLayout", className].join(" ")}
            hideScrollbar={hideScrollbar}
            overflow={overflow}
            {...props}
        >
            {children}
        </ScrollLayoutElement>
    );
};
