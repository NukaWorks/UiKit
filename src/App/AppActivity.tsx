import React from "react";
import styled, {ThemeProvider} from "styled-components";
import {FlexLayout} from "../Layouts/FlexLayout";
import {DefaultLight} from "../Common/Themes/DefaultLight";
import {LayoutProps} from "../Layouts/Layout";

interface AppActivityProps extends LayoutProps {
    direction?: "Vertical" | "Horizontal";
    theme?: "Light" | "Dark";
}

const AppActivityElement = styled(FlexLayout)<AppActivityProps>`
    @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded");

    body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        // Default Display font
        font-family: "Outfit", sans-serif;
        font-size: 9pt;
    }

    .material-symbols-rounded {
        font-family: Material Symbols Rounded,
        sans-serif;
        font-variation-settings: "FILL" 0,
        "wght" 500,
        "GRAD" 0,
        "opsz" 48;
    }

    &.AppActivity {
        background-color: ${({theme}) => theme.AppActivity.backgroundColor};
        min-height: 100vh;
    }

`;

export function AppActivity({
                                children,
                                direction = "Horizontal",
                                className,
                                theme = "Light",
                                ...props
                            }: AppActivityProps) {
    return (
        <ThemeProvider theme={theme === 'Light' ? DefaultLight : DefaultLight}>
            <AppActivityElement
                className={[
                    "Appl__AppActivity",
                    "AppActivity",
                    className,
                ].join(" ")}
                direction={direction}
                {...props}
            >
                {children}
            </AppActivityElement>
        </ThemeProvider>

    );
}
