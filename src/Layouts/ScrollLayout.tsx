import React, {FunctionComponent, ReactNode} from "react";
import styled from "styled-components";
import {Layout} from "./Layout";

interface ScrollLayoutProps {
    children?: ReactNode;
    className?: string;
    hideScrollbar?: boolean;
}

const ScrollLayoutElement = styled(Layout)<ScrollLayoutProps>`
    display: block;
    overflow: auto;
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
        ...props
    }) => {
    return (
        <ScrollLayoutElement
            className={["Layouts__ScrollLayout", "ScrollLayout", className].join(" ")}
            hideScrollbar={hideScrollbar}
            {...props}
        >
            {children}
        </ScrollLayoutElement>
    );
};
