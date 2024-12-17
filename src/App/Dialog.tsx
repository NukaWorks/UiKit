import { ReactNode, useEffect, useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { createPortal } from "react-dom";
import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const DialogElement = styled.div<{ closing: boolean }>`
  z-index: 1000;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  ${({ closing }) => css`
    animation: ${closing ? fadeOut : fadeIn} 0.3s ease-in-out forwards;
  `}
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
  open: boolean;
  onClose: () => void;
  className?: string;
  children?: ReactNode;
}

export function Dialog({
  children,
  className,
  open,
  onClose,
  ...props
}: Readonly<DialogProps>) {
  const [visible, setVisible] = useState(open);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (open) {
      setVisible(true);
      setClosing(false);
    } else {
      setClosing(true);
    }
  }, [open]);

  function handleAnimationEnd() {
    if (closing) {
      setVisible(false);
      setClosing(false);
    }
  }

  const ref = useDetectClickOutside({
    onTriggered: () => {
      onClose?.();
    },
  });

  if (!visible) return null;

  return createPortal(
    <DialogElement
      className={["Appl__Dialog", "Dialog", className].join(" ")}
      closing={closing}
      onAnimationEnd={handleAnimationEnd} // Déclenché à la fin de l'animation
      {...props}
    >
      <DialogContentElement ref={ref}>{children}</DialogContentElement>
    </DialogElement>,
    document.body
  );
}
