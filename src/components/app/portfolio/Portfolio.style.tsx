import styled from "styled-components";
import { normalTransition } from "../../../resources/constants/Animations";
import { pallette } from "../../../resources/constants/Colors";
import { headline, normalFont, subSubHeadline } from "../../../resources/constants/Fonts";
import { Button } from "../../elements/Button.style";
import { Card } from "../../elements/Card.style";
import { Container } from "../../flex/Flex.style";

export const Headline = styled.h1`
    ${headline}
    padding-top: 7rem;
`;

export const SubSubHeadline = styled.h3`
    ${subSubHeadline}
    padding-left: 0;
`;

export const ProjectContainer = styled(Container)`
    width: calc(100% - 10rem);
    height: fit-content;
    margin: 1rem 5rem;
    &:hover {
        div.card {
            transform: translateX(3rem);
        }
    }
`;

export const ProjectCard = styled(Card)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 3rem;
    width: 100%;
    ${normalTransition}
    transform: translateX(0);
`;

export const PreviewImage = styled.img`
    width: 15rem;
    border-radius: 15px;
`;

export const Caption = styled.h5`
    ${normalFont}
    white-space: pre-line;
    font-size: 1.2rem;
    color: ${pallette[500]};
    padding-top: 1rem;
`;

export const Item = styled.p`
    ${normalFont}
    font-size: 1.5rem;
    margin-right: 1rem;
    color: ${pallette[500]};
`;

export const InfoBox = styled.div`
    flex-grow: 1;
    position: relative;
`;

export const Fabs = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    ${normalTransition}
    transform: translateX(0);
    padding-top: 0.5rem;
`;

export const Fab = styled(Button)`
    height: 4rem;
    width: 4rem;
    font-size: 2rem;
    border-radius: 50%;
    padding: 0;
    display: grid;
    place-items: center;
    margin-bottom: 0.5rem;

    &::before {
        border-radius: 50%;
    }
    &:hover, &:focus {
        transform: translateY(0) translateX(-12px);
    }
`;