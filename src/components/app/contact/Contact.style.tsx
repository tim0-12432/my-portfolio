import styled from "styled-components";
import { pallette } from "../../../resources/constants/Colors";
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

export const ContactContainer = styled(Container)`
    width: 100%;
    height: fit-content;
    padding: 0.5rem 5rem 5rem 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

export const ContactCard = styled(Card)`
    height: 15rem;
    width: 15rem;
    padding: 1rem 2rem;
`;

export const Link = styled.a`
    ${normalLink}
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;