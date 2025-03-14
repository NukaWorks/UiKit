import styled, {css} from 'styled-components';
import React, {forwardRef, useEffect, useState} from 'react';
import {ButtonBaseProps, CommonTypes} from "../Common/Interfaces";
import {buttonBaseStyling} from "../Common/Styling/buttonBaseStyling";

const buttonStyles = css`
    ${buttonBaseStyling};
    border-radius: 300px;
    transition: all 0.1s ease-in-out;
    text-shadow: rgba(0, 0, 0, 0.5) 0 1px 5px;
    padding: 5px 10px;
    font-size: 9pt;
`;

const ButtonBase = styled.button<ButtonProps>`
    ${buttonStyles}
    ${({theme}) => theme === 'Light' && css`
        box-shadow: rgba(110, 110, 110, 0.25) 0 1px 0;
        color: black;
    `}
    ${({theme}) => theme === 'Dark' && css`
        box-shadow: rgba(0, 0, 0, 0.5) 0 1px 0;
        color: whitesmoke;
    `}
    ${({size}) => size === 'Small' && css`
        padding: 5px 10px;
        font-size: 9pt;
    `}
    ${({size}) => size === 'Medium' && css`
        padding: 8px 15px;
        font-size: 13pt;
    `}
    ${({size}) => size === 'Large' && css`
        padding: 8px 20px;
        font-size: 20pt;
    `} // TODO: Export shadow
    ${({color, theme}) => color === 'Default' && theme === 'Light' && css`
        background-color: #f0f0f0;

        &:hover {
            background-color: #d8d7d7;
        }

        &:active {
            background-color: #bebebe;
        }

        &:focus-within {
            box-shadow: rgba(220, 220, 220, 0.3) 0 0 0 0.3em;
        }
    `}
    ${({color, theme}) => color === 'Default' && theme === 'Dark' && css`
        background-color: #2f2f33;

        &:hover {
            background-color: #1f1f21;
        }

        &:active {
            background-color: #000000;
        }

        &:focus-within {
            box-shadow: rgba(154, 152, 152, 0.3) 0 0 0 0.3em;
        }
    `}
    ${({color}) => color === 'Primary' && css`
        background-color: #1ea7fd;

        &:hover {
            background-color: #1c9ae8;
        }

        &:active {
            background-color: #1b91da;
        }

        &:focus-within {
            box-shadow: rgba(30, 167, 253, 0.5) 0 0 0 0.3em;
        }
    `}
    ${({color}) => color === 'Success' && css`
        background-color: #12c421;

        &:hover {
            background-color: #10b01d;
        }

        &:active {
            background-color: #1fa82b;
        }

        &:focus-within {
            box-shadow: rgba(73, 252, 89, 0.5) 0 0 0 0.3em;
        }
    `}
    ${({color}) => color === 'Warning' && css`
        background-color: #eab403;

        &:hover {
            background-color: #d2a203;
        }

        &:active {
            background-color: #bb9002;
        }

        &:focus-within {
            box-shadow: rgba(243, 197, 44, 0.5) 0 0 0 0.3em;
        }
    `}
    ${({color}) => color === 'Alert' && css`
        background-color: #ff5724;

        &:hover {
            background-color: #d0491c;
        }

        &:active {
            background-color: #b63b17;
        }

        &:focus-within {
            box-shadow: rgba(255, 120, 79, 0.5) 0 0 0 0.3em;
        }
    `}
    ${({disabled}) => disabled && css`
        background-color: #f0f0f0;
        color: #bfbfbf;
        text-shadow: none !important;
    `}
`;

export interface ButtonProps extends ButtonBaseProps {
    color?: 'Default' | 'Primary' | 'Success' | 'Warning' | 'Alert' | 'Disabled';
    size?: CommonTypes.Size;
    label?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            color = 'Default',
            theme = 'Light',
            size = 'Small',
            disabled,
            onClick,
            autofocus,
            label,
            ...props
        },
        ref,
    ) => {
        const [disable, setDisable] = useState(false);

        useEffect(() => {
            setDisable(disabled || false);
        }, [disabled]);

        return (
            <ButtonBase
                theme={theme}
                size={size}
                color={color}
                disabled={disable}
                ref={ref}
                autoFocus={autofocus}
                onClick={onClick}
                {...props}
            >
                {label || props.children}
            </ButtonBase>
        );
    },
);

Button.displayName = 'Button';
