import styled from "styled-components";
import {baseStyling} from "../Common/Styling/baseStyling";
import {ComponentBaseProps} from "../Common/Interfaces";

const StyledAvatar = styled.div`
    ${baseStyling};
    display: grid;
    place-items: center;
    width: 3rem;
    height: 3rem;
    background-color: ${({theme}) => theme.Base.defaultBackgroundColor ?? 'transparent'};
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

export function Avatar({...props}: ComponentBaseProps) {
    return (
        <StyledAvatar>
            {props.children}
        </StyledAvatar>
    )
}
