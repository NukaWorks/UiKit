import React, { forwardRef } from "react";
import styled, { ThemeProvider } from "styled-components";

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
  transition: all 0.1s ease-in-out;
  padding: 2px 5px;
  outline: none;
  font-family: "Outfit", sans-serif;
  font-weight: 400;
  font-size: 9pt;
  border: ${(props) =>
      props.invalid ? "rgba(255,129,129,0.8)" : props.theme.borderColor}
    solid 1.3px;
  border-radius: 300px;
  background-color: ${(props) => props.theme.backgroundColor};

  &:focus-within {
    box-shadow: ${(props) =>
        props.invalid ? "rgba(248,85,85,0.5)" : props.theme.outlineColor}
      0 0 0 0.2em;
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
