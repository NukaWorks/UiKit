import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ComponentBaseProps } from "../Common/Interfaces/ComponentBaseProps";

interface SwitchProps extends ComponentBaseProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: "Small" | "Medium" | "Large";
  color?: "Default" | "Primary" | "Success" | "Warning" | "Alert";
}

const SwitchTrack = styled.div<{
  checked: boolean;
  disabled: boolean;
  size: string;
  color: string;
}>`
  position: relative;
  display: inline-block;
  width: ${({ size }) =>
    size === "Small" ? "32px" : size === "Medium" ? "40px" : "48px"};
  height: ${({ size }) =>
    size === "Small" ? "16px" : size === "Medium" ? "20px" : "24px"};
  background-color: ${({ checked, theme, color }) =>
    checked ? theme.Button[color].backgroundColor : "rgba(0, 0, 0, 0.2)"};
  border-radius: 999px;
  transition: background-color 0.2s ease;
`;

const SwitchThumb = styled.div<{ checked: boolean; size: string }>`
  position: absolute;
  top: 50%;
  left: 2px;
  width: ${({ size }) =>
    size === "Small" ? "12px" : size === "Medium" ? "16px" : "20px"};
  height: ${({ size }) =>
    size === "Small" ? "12px" : size === "Medium" ? "16px" : "20px"};
  background-color: white;
  border-radius: 50%;
  transition: transform 0.2s ease;
  transform: translate(
    ${({ checked, size }) =>
      checked
        ? size === "Small"
          ? "16px"
          : size === "Medium"
            ? "20px"
            : "24px"
        : "0"},
    -50%
  );
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

const SwitchButton = styled.button<{ disabled: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  border: none;
  background: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.Button.Primary.backgroundColor};
    outline-offset: 2px;
    border-radius: 4px;
  }
`;

export const Switch: React.FC<SwitchProps> = ({
  checked = false,
  onChange,
  disabled = false,
  size = "Small",
  color = "Primary",
  children,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleClick = () => {
    if (!disabled) {
      const newChecked = !isChecked;
      setIsChecked(newChecked);
      onChange?.(newChecked);
    }
  };

  return (
    <SwitchButton
      type="button"
      role="switch"
      aria-checked={isChecked}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      <SwitchTrack
        checked={isChecked}
        disabled={disabled}
        size={size}
        color={color}
      >
        <SwitchThumb checked={isChecked} size={size} />
      </SwitchTrack>
      {children}
    </SwitchButton>
  );
};
