import styled from "styled-components";
import {forwardRef} from "react";
import {ButtonBaseProps} from "../Common/Interfaces";
import {buttonBaseStyling} from "../Common/Styling/buttonBaseStyling";

const StyledIconButton = styled.button<ButtonBaseProps>`
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
        box-shadow: rgba(220, 220, 220, 0.6) 0 0 0 0.3em;
    }
`;

export const IconButton = forwardRef<HTMLButtonElement, ButtonBaseProps>(({...props}, ref) => {
    return (
        <StyledIconButton {...props} ref={ref}>
            {props.children ?? 'X'}
        </StyledIconButton>
    )
});
