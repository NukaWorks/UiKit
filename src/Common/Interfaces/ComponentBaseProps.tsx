import React, {CSSProperties, ReactNode} from "react";
import {CommonTypes} from "./CommonTypes";

export interface ComponentBaseProps {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    autofocus?: boolean;
    size?: CommonTypes.Size;
    theme?: CommonTypes.Theme;
}
