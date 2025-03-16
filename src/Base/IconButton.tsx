import styled from "styled-components";
import {forwardRef} from "react";
import {ComponentBaseProps} from "../Common/Interfaces";
import {buttonBaseStyling} from "../Common/Styling/buttonBaseStyling";
import {baseStyling} from "../Common/Styling/baseStyling";

const StyledIconButton = styled.button<ComponentBaseProps>`
    ${baseStyling};
    ${buttonBaseStyling};
    background: none;
    color: ${({theme}) => theme === 'Dark' ? 'white' : 'black'};
    padding: 8px 12px;
    border-radius: 3px;

    &:hover {
        background-color: rgba(166, 164, 164, 0.29);
    }

    &:active {
        background-color: #bebebe;
    }

    &:focus-within {
        box-shadow: rgba(220, 220, 220, 0.3) 0 0 0 0.3em;
    }
`;

export const IconButton = forwardRef<HTMLButtonElement, ComponentBaseProps>(({...props}, ref) => {
    return (
        <StyledIconButton {...props} ref={ref}>
            {props.children ?? 'X'}
        </StyledIconButton>
    )
});
