import React, { CSSProperties, ReactNode, useEffect, useState } from "react";
import styled from "styled-components";

export interface TextProps {
  className?: string;
  style?: CSSProperties;
  text?: string;
  disabled?: boolean;
  color?: string;
  size?: number;
  children?: ReactNode;
}

const TextElement = styled.div<{
  disabled?: boolean;
  color?: string;
  size?: number;
}>`
  font-family: "Outfit", sans-serif;
  font-size: ${({ size }) => (size ? size + "pt" : "9pt")};
  color: ${({ disabled, color }) => (disabled ? "#bababa" : color || "black")};
`;

export function Text({
  className,
  style,
  text,
  disabled = false,
  color,
  size,
  children,
  ...props
}: TextProps) {
  const [disable, setDisable] = useState(disabled);

  useEffect(() => {
    setDisable(disabled);
  }, [disabled]);

  return (
    <TextElement
      className={[
        "Base__Text",
        "Text",
        disable ? "Base__Text--Disabled" : "",
        className,
      ].join(" ")}
      disabled={disable}
      size={size}
      color={color}
      style={style}
      {...props}
    >
      {text || children}
    </TextElement>
  );
}
