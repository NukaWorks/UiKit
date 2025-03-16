import styled from "styled-components";
import {baseStyling} from "../Common/Styling/baseStyling";
import {ComponentBaseProps} from "../Common/Interfaces";

const StyledBubble = styled.div`
    ${baseStyling};
    display: grid;
    place-items: center;
    overflow: hidden;
    width: 3.5rem;
    height: 3.5rem;
    background-color: ${({theme}) => theme.Bubbles.backgroundColor ?? 'transparent'};
    border-radius: 100%;
    transition: all 0.3s linear;
    cursor: pointer;
    user-select: none;

    &:hover {
        //box-shadow: 0 3px 10px 1px rgba(128, 128, 128, 0.39);
        //outline: 1px solid gray;
        border-radius: 35%;
    }
`;

export function BubbleContainer({...props}: ComponentBaseProps) {
    return (
        <StyledBubble>
            {props.children}
        </StyledBubble>
    )
}
