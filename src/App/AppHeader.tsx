import styled from "styled-components";
import {Text} from "../Base/Text";
import {FlexLayout} from "../Layouts/FlexLayout";
import {ComponentBaseProps} from "../Common/Interfaces";

const HeaderElement = styled(FlexLayout)<AppHeaderProps>`
    background-color: ${({displayBackground, theme}) =>
            displayBackground ? theme.AppHeader.backgroundColor : "transparent"};
    min-height: 2.5em;
    padding: 5px 10px;
    margin: 0;
    border-bottom: ${({displayBackground, theme}) =>
            displayBackground ? theme.AppHeader.border : "none"};
    z-index: 999;

    // Enable fixed mode
    ${({enableFixedPosition}) => enableFixedPosition && `
        position: fixed;
        width: 100%;
    `};

    // Enable blur mode
    ${({enableBackdropBlur}) => enableBackdropBlur && `
        backdrop-filter: blur(15px);
    `};
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

export interface AppHeaderProps extends ComponentBaseProps {
    title?: string;
    displayBackground?: boolean;
    enableBackdropBlur?: boolean;
    enableFixedPosition?: boolean;
}

export function AppHeader(
    {
        displayBackground = true,
        enableFixedPosition = false,
        enableBackdropBlur = false,
        children,
        className,
        title,
        ...props
    }: AppHeaderProps) {
    return (
        <HeaderElement
            spacing={10}
            alignItems={'Center'}
            direction={'Horizontal'}
            className={["Appl__Header", "AppHeader", className].join(" ")}
            displayBackground={displayBackground}
            enableFixedPosition={enableFixedPosition}
            enableBackdropBlur={enableBackdropBlur}
            {...props}
        >
            {title && <TextElement className="Appl__Header--Title">{title}</TextElement>}
            {children}
        </HeaderElement>
    );
}
