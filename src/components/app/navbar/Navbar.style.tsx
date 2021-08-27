import styled from "styled-components";
import { normalTransition } from "../../../resources/constants/Animations";
import { pallette } from "../../../resources/constants/Colors";
import { logoFont, normalFont } from "../../../resources/constants/Fonts";


export const Bar = styled.div`
    width: 100vw;
    min-height: 5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${pallette[700]};
    background: ${pallette[200]};
    box-shadow: 0px 12px 15px 0px rgba(0,0,0,0.25),
            0px 23px 28px 0px rgba(0,0,0,0.15),
            0px 50px 38px 0px rgba(0,0,0,0.07);
    z-index: 9998;
`;

export const Logo = styled.h1`
    ${logoFont}
    font-size: 2.5rem;
    padding: 0.5rem 2rem 0.5rem 5rem;
`;

export const LinkContainer = styled.div`
    position: relative;
    overflow: hidden;
    padding: 1rem 0;

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        background: ${pallette[700]};
        bottom: 0;
        left: 0;
        transform: translateX(-101%);
        ${normalTransition}
    }
    &:hover, &:focus {
        &::before {
            transform: translateX(0);
        }
    }
`;

export const ToggleButton = styled.button`
    ${normalFont}
    color: ${pallette[700]};
    font-weight: 700;
    font-size: 1.5rem;
    padding: 1rem 0.7rem;
    margin: 0 0.3rem;
    outline: none;
    border: none;

    &:hover, &:focus {
        color: ${pallette[500]};
    }
`;