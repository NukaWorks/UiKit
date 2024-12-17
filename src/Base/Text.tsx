import React, { CSSProperties, ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import { BaseObject } from "styled-components/dist/types";

export interface TextProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >,
    BaseObject {
  className?: string;
  style?: CSSProperties;
  text?: string;
  disabled?: boolean;
  color?: string;
  size?: number;
  children?: ReactNode;
}

const TextElement = styled.p<{
  disabled?: boolean;
  color?: string;
  size?: number;
}>`
  font-family: "Outfit", sans-serif;
  font-size: ${({ size }) => (size ? size + "pt" : "9pt")};
  color: ${({ disabled, color }) => (disabled ? "#bababa" : color || "black")};
  padding: 0;
  margin: 0;
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
