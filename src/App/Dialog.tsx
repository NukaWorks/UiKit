import React, { useEffect, useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { createPortal } from "react-dom";
import styled, { css, keyframes } from "styled-components";
import { LayoutProps } from "../Layouts/Layout";
import { IconButton } from "../Base/IconButton";
import { X } from "lucide-react";
import { Text } from "../Base/Text";
import { FlexLayout } from "../Layouts/FlexLayout";

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

const StyledDialogHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;
  min-height: 32px;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  z-index: 1;
`;

interface DialogHeaderProps extends LayoutProps {
  onClose?: () => void;
}

export const DialogHeader = ({
  children,
  className,
  onClose,
  ...props
}: DialogHeaderProps) => {
  return (
    <StyledDialogHeader
      className={["Dialog__Header", className].join(" ")}
      {...props}
    >
      <FlexLayout direction="Horizontal" spacing={3} style={{ flex: 1 }}>
        {children}
      </FlexLayout>
      {onClose && (
        <IconButton onClick={onClose}>
          <X size={18} />
        </IconButton>
      )}
    </StyledDialogHeader>
  );
};

interface DialogProps extends LayoutProps {
  open: boolean;
  onClose: () => void;
  title?: string;
}

export function Dialog({
  children,
  className,
  open,
  onClose,
  title,
  ...props
}: DialogProps) {
  const [visible, setVisible] = useState<boolean>(open ?? false);
  const [closing, setClosing] = useState<boolean>(false);

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

  // Check if the first child is a DialogHeader
  const hasCustomHeader = React.Children.toArray(children).some(
    (child) => React.isValidElement(child) && child.type === DialogHeader
  );

  return createPortal(
    <DialogElement
      className={["Appl__Dialog", "Dialog", className].join(" ")}
      closing={closing}
      onAnimationEnd={handleAnimationEnd}
      {...props}
    >
      <DialogContentElement ref={ref}>
        {!hasCustomHeader && (
          <>
            {title ? (
              <DialogHeader onClose={onClose}>
                <Text size={16} wordWrap={false}>
                  {title}
                </Text>
              </DialogHeader>
            ) : (
              <CloseButton>
                <IconButton onClick={onClose}>
                  <X size={18} />
                </IconButton>
              </CloseButton>
            )}
          </>
        )}
        {children}
      </DialogContentElement>
    </DialogElement>,
    document.body
  );
}
