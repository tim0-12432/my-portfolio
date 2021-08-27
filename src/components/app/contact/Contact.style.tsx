import styled from "styled-components";
import { normalTransition } from "../../../resources/constants/Animations";
import { pallette, primaryGradient, secondaryGradient } from "../../../resources/constants/Colors";
import { headline, normalFont, normalLink, subSubHeadline } from "../../../resources/constants/Fonts";
import { Card } from "../../elements/Card.style";
import { Container } from "../../flex/Flex.style";

export const Headline = styled.h1`
    ${headline}
    padding-top: 7rem;
`;

export const SocialIcon = styled.h3`
    ${subSubHeadline}
    color: ${pallette[500]};
    font-size: 4.8rem;
    svg {
        fill: ${pallette[500]};
    }
`;

export const SocialCaption = styled.h5`
    ${normalFont}
    font-size: 1.5rem;
    color: ${pallette[400]};
`;

export const SocialName = styled.h6`
    ${normalFont}
    font-size: 1.2rem;
    color: ${pallette[200]};
`;

export const ContactContainer = styled(Container)`
    width: 100%;
    height: fit-content;
    padding: 0.5rem 3rem 10rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

export const ContactCard = styled(Card)`
    height: 15rem;
    width: 15rem;
    padding: 0;
    margin: 2rem;

    &:nth-child(odd) > a::before {
        background: ${primaryGradient};
    }
    &:nth-child(even) > a::before {
        background: ${secondaryGradient};
    }
`;

export const Link = styled.a`
    ${normalLink}
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    padding: 1rem 2rem;
    border-radius: 15px;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        ${normalTransition}
        transform: translateX(-100%);
    }
    h3, h5, h6 {
        z-index: 3;
        ${normalTransition}
    }
    h3 svg {
        ${normalTransition}
    }
    h6 {
        opacity: 0;
    }
    &:hover, &:focus {
        &::before {
            transform: translateX(0);
        }
        h5 {
            color: ${pallette[200]};
        }
        h3 svg {
            fill: ${pallette[200]};
        }
        h6 {
            opacity: 1;
        }
    }
`;