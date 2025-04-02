import styled, { css } from "styled-components";
import React, {
  forwardRef,
  useEffect,
  useState,
  ButtonHTMLAttributes,
} from "react";
import { ComponentBaseProps } from "../Common/Interfaces";
import { buttonBaseStyling } from "../Common/Styling/buttonBaseStyling";
import { baseStyling } from "../Common/Styling/baseStyling";
import { DefaultLight } from "../Common/Themes/DefaultLight";

const buttonStyles = css`
  ${baseStyling};
  ${buttonBaseStyling};
  transition: all 0.1s ease-in-out;
  text-shadow: none;
  font-size: 9pt;
`;

const ButtonBase = styled.button<ButtonProps>`
  ${buttonStyles};
  border-radius: ${({ theme }) => theme.Base.borderRadius};

  ${({ size }) =>
    size === "Small" &&
    css`
      padding: 5px 10px;
      font-size: 9pt;
    `}
  ${({ size }) =>
    size === "Medium" &&
    css`
      padding: 8px 15px;
      font-size: 13pt;
    `}
    ${({ size }) =>
    size === "Large" &&
    css`
      padding: 8px 20px;
      font-size: 20pt;
    `}

    ${({ color }) =>
    color !== "Disabled" &&
    css`
      background-color: ${({ theme }) =>
        theme.Button[color!].backgroundColor ?? "transparent"};
      border-bottom: 3px solid
        ${({ theme }) => theme.Button[color!].borderColor ?? "transparent"};
      color: ${({ theme }) => theme.Button[color!].textColor};

      &:hover {
        background-color: ${({ theme }) =>
          theme.Button[color!].hoverBackgroundColor ?? "transparent"};
      }

      &:active {
        background-color: ${({ theme }) =>
          theme.Button[color!].activeBackgroundColor ?? "transparent"};
      }

      &:focus-within {
        box-shadow: ${({ theme }) =>
            theme.Button[color!].shadowColor ?? "transparent"}
          0 0 0 0.3em;
        border-bottom: 3px solid
          ${({ theme }) =>
            theme.Button[color!].activeBackgroundColor ?? "transparent"};
      }
    `}

    ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.4 !important;
      text-shadow: none !important;
      pointer-events: none;
    `}
`;

export interface ButtonProps
  extends ComponentBaseProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  color?:
    | "Default"
    | "Primary"
    | "Success"
    | "Warning"
    | "Alert"
    | "Disabled"
    | "TabButton"
    | "TabButtonActive";
  label?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      color = "Default",
      theme = "Light",
      size = "Small",
      disabled,
      onClick,
      autofocus,
      label,
      ...props
    },
    ref
  ) => {
    const [disable, setDisable] = useState(false);

    useEffect(() => {
      setDisable(disabled || false);
    }, [disabled]);

    return (
      <ButtonBase
        theme={theme === "Light" ? DefaultLight : DefaultLight}
        size={size}
        color={color}
        disabled={disable}
        ref={ref}
        autoFocus={autofocus}
        onClick={onClick}
        {...props}
      >
        {label || props.children}
      </ButtonBase>
    );
  }
);

Button.displayName = "Button";
