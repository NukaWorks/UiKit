import {CSSProperties, ReactNode} from "react";
import styled from "styled-components";
import {Text} from "../Base/Text";

const HeaderElement = styled.header<AppHeaderProps>`
    font-family: "Outfit", sans-serif;
    background-color: ${({displayBackground}) =>
            displayBackground ? "rgba(225,225,225,0.3)" : "transparent"};
    display: flex;
    align-items: center;
    gap: 10px;
    height: 2.5em;
    padding: 5px 10px;
    border-bottom: ${({displayBackground}) =>
            displayBackground ? "1px solid rgba(225,225,225,0.5)" : "none"};
    z-index: 2;
`;

const TextElement = styled(Text)`
    user-select: none;
    -webkit-user-select: none;
    font-weight: 700;
    font-size: 20px;
    line-height: 1;
    white-space: nowrap;
    display: inline-block;
    vertical-align: top;
`;

const ContentElement = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 5px;
`;

export interface AppHeaderProps {
    className?: string;
    title?: string;
    displayBackground?: boolean;
    children?: ReactNode;
    style?: CSSProperties;
}

export function AppHeader({
                              children,
                              displayBackground = true,
                              className,
                              title,
                              ...props
                          }: AppHeaderProps) {
    return (
        <HeaderElement
            className={["Appl__Header", "AppHeader", className].join(" ")}
            displayBackground={displayBackground}
            {...props}
        >
            {title && <TextElement className="Appl__Header--Title">{title}</TextElement>}
            <ContentElement className="Appl__Header--Content">
                {children}
            </ContentElement>
        </HeaderElement>
    );
}
