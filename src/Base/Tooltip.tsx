import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { ComponentBaseProps } from "../Common/Interfaces/ComponentBaseProps";

// Arrow constants
const ARROW = {
  SIZE: 8,
  SPACING: {
    WITH_ARROW: 14,
    WITHOUT_ARROW: 8,
  },
} as const;

interface ArrowProps {
  /** Whether to show the arrow */
  showArrow?: boolean;
  /** Size of the arrow in pixels */
  arrowSize?: number;
}

interface TooltipProps extends Omit<ComponentBaseProps, "onClick">, ArrowProps {
  /** The content to show in the tooltip */
  content: React.ReactNode;
  /** The element that triggers the tooltip */
  children: React.ReactNode;
  /** Position of the tooltip */
  position?: "top" | "bottom" | "left" | "right";
  /** Whether the tooltip is shown */
  show?: boolean;
  /** Max width of the tooltip */
  maxWidth?: number;
  /** Click handler for the tooltip container */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.95);
  }
`;

const Container = styled.div`
  position: relative;
  display: inline-block;
`;

const getArrowStyles = (position: string, arrowSize: number = ARROW.SIZE) => {
  const offset = -arrowSize * 2;

  const baseStyles = css`
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: ${arrowSize}px solid transparent;
    z-index: 1;
  `;

  switch (position) {
    case "top":
      return css`
        &::after {
          ${baseStyles}
          bottom: ${offset}px;
          left: 50%;
          transform: translateX(-50%);
          border-top-color: white;
          filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.1));
        }
      `;
    case "bottom":
      return css`
        &::after {
          ${baseStyles}
          top: ${offset}px;
          left: 50%;
          transform: translateX(-50%);
          border-bottom-color: white;
          filter: drop-shadow(0 -1px 1px rgba(0, 0, 0, 0.1));
        }
      `;
    case "left":
      return css`
        &::after {
          ${baseStyles}
          right: ${offset}px;
          top: 50%;
          transform: translateY(-50%);
          border-left-color: white;
          filter: drop-shadow(1px 0 1px rgba(0, 0, 0, 0.1));
        }
      `;
    case "right":
      return css`
        &::after {
          ${baseStyles}
          left: ${offset}px;
          top: 50%;
          transform: translateY(-50%);
          border-right-color: white;
          filter: drop-shadow(-1px 0 1px rgba(0, 0, 0, 0.1));
        }
      `;
    default:
      return "";
  }
};

const Content = styled.div<{
  position: string;
  show: boolean;
  maxWidth: number;
  $coords: { top: number; left: number } | null;
  $showArrow: boolean;
  $arrowSize?: number;
}>`
  position: fixed;
  z-index: 1000;
  padding: 8px 12px;
  background: white;
  border-radius: 8px;
  font-family: "Outfit", sans-serif;
  font-size: 14px;
  color: #000000;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  max-width: ${({ maxWidth }) => maxWidth}px;
  width: max-content;
  opacity: 0;
  pointer-events: none;
  transform-origin: center;
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;

  ${({ show }) =>
    show
      ? css`
          opacity: 1;
          transform: scale(1);
          animation: ${fadeIn} 0.2s ease forwards;
        `
      : css`
          opacity: 0;
          transform: scale(0.95);
          animation: ${fadeOut} 0.2s ease forwards;
        `}

  ${({ $coords }) =>
    $coords &&
    css`
      top: ${$coords.top}px;
      left: ${$coords.left}px;
    `}

  ${({ position, $showArrow, $arrowSize }) =>
    $showArrow && getArrowStyles(position, $arrowSize)}
`;

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = "top",
  show: controlledShow,
  maxWidth = 300,
  showArrow = false,
  arrowSize = ARROW.SIZE,
  onClick,
  ...props
}) => {
  const [show, setShow] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(
    null
  );
  const triggerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isControlled = controlledShow !== undefined;
  const isVisible = isControlled ? controlledShow : show;

  const calculatePosition = () => {
    if (!triggerRef.current || !contentRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const contentRect = contentRef.current.getBoundingClientRect();
    const spacing = showArrow
      ? ARROW.SPACING.WITH_ARROW
      : ARROW.SPACING.WITHOUT_ARROW;

    let top = 0;
    let left = 0;

    switch (position) {
      case "top":
        top = triggerRect.top - contentRect.height - spacing;
        left = triggerRect.left + (triggerRect.width - contentRect.width) / 2;
        break;
      case "bottom":
        top = triggerRect.bottom + spacing;
        left = triggerRect.left + (triggerRect.width - contentRect.width) / 2;
        break;
      case "left":
        top = triggerRect.top + (triggerRect.height - contentRect.height) / 2;
        left = triggerRect.left - contentRect.width - spacing;
        break;
      case "right":
        top = triggerRect.top + (triggerRect.height - contentRect.height) / 2;
        left = triggerRect.right + spacing;
        break;
    }

    // Prevent tooltip from going off screen
    const padding = ARROW.SPACING.WITHOUT_ARROW;
    top = Math.max(
      padding,
      Math.min(window.innerHeight - contentRect.height - padding, top)
    );
    left = Math.max(
      padding,
      Math.min(window.innerWidth - contentRect.width - padding, left)
    );

    setCoords({ top, left });
  };

  useEffect(() => {
    if (isVisible) {
      calculatePosition();
      const handleScroll = () => calculatePosition();
      window.addEventListener("scroll", handleScroll, true);
      window.addEventListener("resize", calculatePosition);
      return () => {
        window.removeEventListener("scroll", handleScroll, true);
        window.removeEventListener("resize", calculatePosition);
      };
    }
  }, [isVisible, content]);

  const handleMouseEnter = () => {
    if (!isControlled) {
      setShow(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isControlled) {
      setShow(false);
    }
  };

  return (
    <>
      <Container
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...(props as React.HTMLAttributes<HTMLDivElement>)}
      >
        {children}
      </Container>
      <Content
        ref={contentRef}
        position={position}
        show={isVisible}
        maxWidth={maxWidth}
        $coords={coords}
        $showArrow={showArrow}
        $arrowSize={arrowSize}
      >
        {content}
      </Content>
    </>
  );
};
