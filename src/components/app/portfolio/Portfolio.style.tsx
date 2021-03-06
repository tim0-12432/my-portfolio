import styled from "styled-components";
import { normalTransition } from "../../../resources/constants/Animations";
import { pallette, primary, secondary } from "../../../resources/constants/Colors";
import { headline, normalFont, normalLink, subSubHeadline } from "../../../resources/constants/Fonts";
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
    color: ${pallette[500]};
    -webkit-text-fill-color: ${pallette[500]};
    background: transparent;
    ${normalTransition}
`;

export const ProjectContainer = styled(Container)`
    cursor: pointer;
    width: calc(100% - 10rem);
    height: fit-content;
    margin: 2rem 5rem 0rem 5rem;
    &:hover, &:focus {
        div.card {
            transform: translateX(3rem);

            div > div > div p, div > div > h3 {
                background: linear-gradient(129deg, ${primary} 0%, ${secondary} 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
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

export const PreviewImage = styled.div`
    width: 15rem;
    min-width: 15rem;
    max-width: 30%;
    height: 15rem;
    border-radius: 15px;
    overflow: hidden;
`;

export const PreviewImageModal = styled(PreviewImage)`
    margin-top: 2rem;
    width: 100%;
    max-width: 100%;
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
    margin-right: 1.7rem;
    color: ${pallette[500]};
    -webkit-text-fill-color: ${pallette[500]};
    background: transparent;
    ${normalTransition}
    svg {
        margin-right: 0.3rem;
    }
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

export const ColorBar = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    border-radius: 15px;
    border: 2px solid ${pallette[300]};
    overflow: hidden;
    margin: 0.5rem 0 1rem 0;
    height: 2rem;
`;

interface IBgProps {
    color?: string;
}

export const Color = styled.div.attrs<IBgProps>({})`
    width: 2rem;
    height: 2rem;
    background-color: ${
	(props: IBgProps) => {
		if (props["color"]){
			return props["color"];
		} else {
			return pallette[800];
		}
	}};
`;

export const Font = styled.p`
    ${normalFont}
    font-size: 1.5rem;
    color: ${pallette[300]};
    padding: 0 0 0.5rem 0;
`;

export const Link = styled.a`
    ${normalLink}
`;