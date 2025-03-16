import styled from "styled-components";
import {FlexLayout} from "../Layouts/FlexLayout";
import {ComponentBaseProps} from "../Common/Interfaces";

const UiAppElement = styled(FlexLayout)`
    background-color: ${({theme}) => theme.UiApp.backgroundColor};
    border: ${({theme}) => theme.UiApp.border + ';'});
    box-shadow: ${({theme}) => theme.UiApp.boxShadow + ';'});
    border-radius: ${({theme}) => theme.UiApp.borderRadius + ';'});
    margin: ${({theme}) => theme.UiApp.margin + ';'});
    flex: 1;
`;

export function UiApp({children, className, theme, ...props}: ComponentBaseProps) {
    return (
        <UiAppElement
            className={["Appl__UiApp", "UiApp", className].join(" ")}
            {...props}
        >
            {children}
        </UiAppElement>
    );
}
