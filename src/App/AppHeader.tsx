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
}

export function AppHeader(
    {
        displayBackground = true,
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
            {...props}
        >
            {title && <TextElement className="Appl__Header--Title">{title}</TextElement>}
            <FlexLayout direction={'Horizontal'} flex={1} spacing={5} className="Appl__Header--Content">
                {children}
            </FlexLayout>
        </HeaderElement>
    );
}
