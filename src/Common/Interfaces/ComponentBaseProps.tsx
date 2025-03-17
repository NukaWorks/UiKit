import React, {CSSProperties} from "react";
import {CommonTypes} from "./CommonTypes";
import {LayoutProps} from "../../Layouts/Layout";

export interface ComponentBaseProps extends LayoutProps {
    className?: string;
    style?: CSSProperties;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    autofocus?: boolean;
    size?: CommonTypes.Size;
    theme?: CommonTypes.Theme;
}
