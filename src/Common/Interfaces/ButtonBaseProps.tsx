import React, {ReactNode} from "react";
import {CommonTypes} from "./CommonTypes";

export interface ButtonBaseProps {
    children?: ReactNode;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    autofocus?: boolean;
    theme?: CommonTypes.Theme;
}
