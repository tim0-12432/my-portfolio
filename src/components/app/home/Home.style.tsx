import styled from "styled-components";
import { pallette } from "../../../resources/constants/Colors";
import { logoFont, normalFont } from "../../../resources/constants/Fonts";

export const Logo = styled.h1`
    ${logoFont}
    position: absolute;
    color: ${pallette[200]};
    font-size: 2.5rem;
    top: 0;
    left: 0;
    padding: 3rem 5rem
`;

export const Background = styled.div`
    background-color: ${pallette[800]};
    width: 100%;
    height: 100%;
`;

export const Image = styled.div`
    box-shadow: inset 17px 0px 33px 0px ${pallette[800]};
    height: 100%;
    width: 100%;
    position: absolute;
    right: 0;
    top: 0;
    background-image: url("./images/wallpaper.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
    background-attachment: scroll;
`;

export const InfoBoxContainer = styled.div`
    ${normalFont}
    font-size: 3rem;
    bottom: 6rem;
    left: 5rem;
    color: ${pallette[200]};
`;

export const InfoBox = styled.div`
    margin-bottom: 3rem;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-start;
`;