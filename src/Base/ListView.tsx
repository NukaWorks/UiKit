import React from "react";
import styled from "styled-components";
import {ScrollLayout} from "../Layouts/ScrollLayout";
import {baseStyling} from "../Common/Styling/baseStyling";
import {LayoutProps} from "../Layouts/Layout";

const ListElement = styled(ScrollLayout)`
    ${baseStyling};
    display: block;

    & > div:hover {
        border-radius: 5px;
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

export function ListView({children, className, ...props}: LayoutProps) {
    return (
        <ListElement
            className={["Base__ListView", "ListView", className].join(" ")}
            {...props}
        >
            {children}
        </ListElement>
    );
}
