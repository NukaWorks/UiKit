import { ReactNode } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";

const dialogAnim = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const DialogElement = styled.div`
  z-index: 1000;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.7);
  animation: ${dialogAnim} 0.2s 0.2s ease-in-out forwards;
`;

const DialogContentElement = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid #ccc;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  padding: 1em;
`;

interface DialogProps {
  onClose: () => {};
  className?: string;
  children?: ReactNode;
}

export function Dialog({
  children,
  className,
  onClose,
  ...props
}: Readonly<DialogProps>) {
  const ref = useDetectClickOutside({
    onTriggered: () => {
      onClose?.();
    },
  });

  return createPortal(
    <DialogElement
      ref={ref}
      className={["Appl__Dialog", "Dialog", className].join(" ")}
      {...props}
    >
      <DialogContentElement>{children}</DialogContentElement>
    </DialogElement>,
    document.body
  );
}
