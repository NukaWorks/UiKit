import React, {ReactNode} from "react";
import {Theme} from "./CommonTypes";

export interface ButtonBaseProps {
    children?: ReactNode;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    autofocus?: boolean;
    theme?: Theme;
}
