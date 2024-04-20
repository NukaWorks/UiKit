import React from "react";
import PropTypes, { InferProps } from "prop-types";
import styled from "styled-components";

const SeparatorElement = styled.div`
  background-color: rgba(84, 84, 84, 0.2);
  height: 2px;
  border-radius: 300px;
`;

export function Separator({
  className,
  ...props
}: InferProps<typeof Separator.propTypes>) {
  return (
    <SeparatorElement
      className={["Misc__Separator", "Separator", className].join(" ")}
      {...props}
    />
  );
}

Separator.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  props: PropTypes.any,
};
