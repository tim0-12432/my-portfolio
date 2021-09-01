import styled from "styled-components";
import { normalTransition } from "../../../resources/constants/Animations";
import { pallette } from "../../../resources/constants/Colors";
import { headline, subHeadline, subSubHeadline, normalFont, normalLink } from "../../../resources/constants/Fonts";
import { Card } from "../../elements/Card.style";
import { isMobileRatio } from "../utility";

interface IisDarkProps {
    isDark?: boolean;
}

export const Headline = styled.h1`
    ${headline}
`;

export const SubHeadline = styled.h2`
    ${subHeadline}
`;

export const SubSubHeadline = styled.h3`
    ${subSubHeadline}
`;

export const InfoBox = styled.p.attrs<IisDarkProps>({})`
    ${normalFont}
    font-size: 1.6rem;
    padding: 0 0 0 5rem;
    margin-bottom: ${
	isMobileRatio()
		? "15rem"
		: "2rem"
};
    color: ${
	(props: IisDarkProps) => {
		if (props["isDark"]){
			return pallette[300];
		} else {
			return pallette[600];
		}
	}};
`;

export const Profile = styled.div`
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    margin: 10rem;
    background-image: url("https://avatars.githubusercontent.com/u/79634593?v=4");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
    ${
	isMobileRatio()
		? "display: none;"
		: null
}
`;

export const Divider = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg) translateY(-1px);
    svg {
        position: relative;
        display: block;
        width: calc(137% + 1.3px);
        height: 184px;
    }
    .shape-fill {
        fill: ${pallette[600]};
    }
`;

export const Skills = styled.div`
    width: 100%;
    background: ${pallette[600]};
    position: relative;
`;

export const Thoughts = styled.div`
    padding-top: 2rem;
    width: 100%;
    background: ${pallette[600]};
    position: relative;
`;

export const List = styled.ul`
    ${normalFont}
    padding: 0.5rem 2rem;
    list-style-type: none;
`;

export const ListItem = styled.li`
    margin-bottom: 1rem;
    font-size: 1.9rem;
    a {
        ${normalLink}
        color: ${pallette[400]};
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    a svg {
        height: 3.3rem;
        width: 3.3rem;
        margin-right: 0.3rem;
        ${normalTransition}
        transform: translateX(200%) rotate(0);
    }
    &:nth-child(odd) a svg {
        fill: url(#linearPrimary);
    }
    &:nth-child(even) a svg {
        fill: url(#linearSecondary);
    }
    a span {
        opacity: 0;
        ${normalTransition}

        &.help {
            flex-grow: 1;
            text-align: right;
            transform: translateX(-100%);
            font-size: 1.3rem;
        }
    }
    a:hover {
        span {
            opacity: 1;

            &.help {
                transform: translateX(0);
            }
        }
        svg {
            transform: translateX(0) rotate(-15deg);
        }
    }
`;

export const SkillCard = styled(Card)`
    min-width: 20rem;
    h3 {
        width: 100%;
        text-align: center;
    }
    margin-bottom: 1rem;
`;

export const Caption = styled.h5`
    ${normalFont}
    padding: 2.5rem 5rem;
    font-size: 1.5rem;
    color: ${pallette[400]};
`;

export const ThoughtCard = styled(Card)`
    width: calc(100% - 10rem);
    margin: 1rem 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 3rem;
`;

export const ThoughtImage = styled.img`
    width: 17rem;
    height: 17rem;
    max-width: 25%;
`;

export const ThoughtBody = styled.p`
    ${normalFont}
    white-space: pre-line;
    font-size: 1.2rem;
    margin-top: 1rem;
`;