import React, {forwardRef} from "react";
import styled, {ThemeProvider} from "styled-components";
import {baseStyling} from "../Common/Styling/baseStyling";

export interface TextFieldProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    type?: "text" | "password" | "email" | "number" | "tel" | "url";
    placeholder?: string;
    invalid?: boolean;
    className?: string;
    disabled?: boolean;
}

const TextFieldElement = styled.input<{ invalid?: boolean }>`
    ${baseStyling};
    height: auto;
    border-radius: ${({theme}) => theme.Base.borderRadius};
    outline: none;
    padding: 5px 10px;
    font-weight: 400;
    font-size: 9pt;
    border: ${(props) =>
            props.invalid ? "rgba(255,129,129,0.8)" : props.theme.borderColor} solid 1px;
    background-color: ${(props) => props.theme.backgroundColor};

    &:focus-within {
        box-shadow: ${(props) =>
                props.invalid ? "rgba(248,85,85,0.5)" : props.theme.outlineColor} 0 0 0 0.3em;
    }

    &:disabled {
        opacity: 0.6;
    }
`;

const lightTheme = {
    borderColor: "rgba(70, 70, 70, 0.5)",
    outlineColor: "rgba(154, 152, 152, 0.5)",
    backgroundColor: "rgb(255, 255, 255)",
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
    (props, ref) => (
        <ThemeProvider theme={lightTheme}>
            <TextFieldElement
                ref={ref}
                className={["Base__TextField", "TextField", props.className].join(" ")}
                {...props}
            />
        </ThemeProvider>
    )
);

TextField.displayName = "TextField";
