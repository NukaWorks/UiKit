import styled, { css } from "styled-components";
import React, { forwardRef, useEffect, useState } from "react";
import { ComponentBaseProps } from "../Common/Interfaces";
import { baseStyling } from "../Common/Styling/baseStyling";
import { DefaultLight } from "../Common/Themes/DefaultLight";

const RadioContainer = styled.div<{ theme: typeof DefaultLight }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.RadioButton.gap};
  cursor: pointer;
  user-select: none;
`;

const RadioInput = styled.input<RadioProps>`
  ${baseStyling};
  appearance: none;
  position: relative;
  margin: 0;
  cursor: pointer;
  border: ${({ theme }) => theme.RadioButton.borderWidth} solid
    ${({ theme, color = "Default" }) => theme.Button[color].borderColor};
  border-radius: 50%;
  transition: ${({ theme }) => theme.RadioButton.transition};

  ${({ theme, size = "Small" }) => css`
    width: ${theme.RadioButton.sizes[size].width};
    height: ${theme.RadioButton.sizes[size].height};
  `}

  &:checked {
    background-color: transparent;
    border-color: ${({ theme, color = "Default" }) =>
      theme.Button[color].borderColor};

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
      height: 50%;
      border-radius: 50%;
      background-color: ${({ theme, color = "Default" }) =>
        theme.Button[color].backgroundColor};
    }
  }

  &:focus-visible {
    box-shadow: ${({ theme, color = "Default" }) =>
        theme.Button[color].shadowColor}
      0 0 0 0.2em;
    outline: none;
  }

  ${({ theme, disabled }) =>
    disabled &&
    css`
      opacity: ${theme.RadioButton.disabled.opacity};
      cursor: not-allowed;
      pointer-events: none;
    `}
`;

const RadioLabel = styled.label<{ size?: string }>`
  font-family: "Outfit", sans-serif;
  font-size: ${({ theme, size = "Small" }) =>
    theme.RadioButton.sizes[size].fontSize};
  cursor: pointer;
`;

const StyledRadioGroup = styled.div<{ direction?: "horizontal" | "vertical" }>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "horizontal" ? "row" : "column"};
  gap: ${({ theme }) => theme.RadioButton.gap};
`;

export interface RadioProps extends ComponentBaseProps {
  color?: "Default" | "Primary" | "Success" | "Warning" | "Alert" | "Disabled";
  label?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
}

interface RadioGroupProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  children: React.ReactNode;
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  direction?: "horizontal" | "vertical";
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      color = "Default",
      theme = "Light",
      size = "Small",
      disabled,
      label,
      checked,
      onChange,
      name,
      value,
      ...props
    },
    ref
  ) => {
    return (
      <RadioContainer theme={theme === "Light" ? DefaultLight : DefaultLight}>
        <RadioInput
          type="radio"
          theme={theme === "Light" ? DefaultLight : DefaultLight}
          size={size}
          color={color}
          disabled={disabled}
          checked={checked}
          onChange={onChange}
          name={name}
          value={value}
          ref={ref}
          {...props}
        />
        {label && (
          <RadioLabel
            theme={theme === "Light" ? DefaultLight : DefaultLight}
            size={size}
          >
            {label}
          </RadioLabel>
        )}
      </RadioContainer>
    );
  }
);

export const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  name,
  value,
  onChange,
  direction = "vertical",
  ...props
}) => {
  const handleChange = (newValue: string) => {
    onChange?.(newValue);
  };

  return (
    <StyledRadioGroup direction={direction} {...props}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return null;
        return React.cloneElement(child as React.ReactElement<RadioProps>, {
          name,
          checked: child.props.value === value,
          onChange: () => handleChange(child.props.value),
        });
      })}
    </StyledRadioGroup>
  );
};

Radio.displayName = "Radio";
RadioGroup.displayName = "RadioGroup";
