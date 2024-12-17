import React from "react";
import styled, { ThemeProvider } from "styled-components";

export interface LinkProps {
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  href: string;
}

const LinkElement = styled.a<LinkProps>`
  font-family: "Outfit", sans-serif;
  font-weight: 500;
  color: ${(props) =>
    props.disabled ? props.theme.disabledColor : props.theme.color};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  padding-inline: 5px;
  border-radius: 5px;
  text-decoration: none;

  &:hover {
    background-color: ${(props) =>
      props.disabled ? "transparent" : props.theme.backgroundColor};
    color: ${(props) =>
      props.disabled ? props.theme.disabledColor : props.theme.hoverColor};
  }

  &:active {
    background-color: ${(props) =>
      props.disabled ? "initial" : props.theme.activeBackgroundColor};
    color: ${(props) =>
      props.disabled ? props.theme.disabledColor : props.theme.activeColor};
    user-select: none;
    -webkit-user-select: none;
  }
`;

const lightTheme = {
  color: "#0097EC",
  hoverColor: "#008ee3",
  activeColor: "#0485d2",
  disabledColor: "#bababa",
  backgroundColor: "rgba(234, 234, 234, 0.4)",
  activeBackgroundColor: "rgba(234, 234, 234, 0.50)",
};

export function Link({
  children,
  className,
  disabled = false,
  href,
  ...props
}: LinkProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <LinkElement
        className={[
          `Base__Link${disabled ? "--Disabled" : ""}`,
          "Link",
          className,
        ].join(" ")}
        disabled={disabled}
        href={disabled ? "#" : href}
        {...props}
      >
        {children}
      </LinkElement>
    </ThemeProvider>
  );
}
