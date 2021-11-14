import styled from "styled-components";
import { normalTransition } from "../../../resources/constants/Animations";
import { pallette } from "../../../resources/constants/Colors";
import { logoFont, normalFont } from "../../../resources/constants/Fonts";

interface IisDarkProps {
    isDark?: boolean;
}

export const Bar = styled.div.attrs<IisDarkProps>({})`
    width: 100%;
    min-height: 5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${
	(props: IisDarkProps) => {
		if (props["isDark"]){
			return pallette[300];
		} else {
			return pallette[700];
		}
	}};
    background: ${
	(props: IisDarkProps) => {
		if (props["isDark"]){
			return pallette[700];
		} else {
			return pallette[200];
		}
	}};
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

export const LinkContainer = styled.div.attrs<IisDarkProps>({})`
    position: relative;
    overflow: hidden;
    padding: 1rem 0;

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        background: ${
	(props: IisDarkProps) => {
		if (props["isDark"]){
			return pallette[300];
		} else {
			return pallette[700];
		}
	}};
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

export const ToggleButton = styled.button.attrs<IisDarkProps>({})`
    ${normalFont}
    color: ${pallette[700]};
    background: transparent;
    cursor: pointer;
    margin: 0 3rem 0 0.3rem;
    padding: 0 0.25rem;
    outline: none;
    border: none;
    height: 2.2rem;
    width: 4rem;
    display: flex;
    justify-content: ${
	(props: IisDarkProps) => {
		if (props["isDark"]){
			return "flex-end";
		} else {
			return "flex-start";
		}
	}};
    align-items: center;
    border-radius: 100rem;
    border: 2px solid ${
	(props: IisDarkProps) => {
		if (props["isDark"]){
			return pallette[300];
		} else {
			return pallette[700];
		}
	}};
    ${normalTransition}
`;

export const Toggler = styled.p.attrs<IisDarkProps>({})`
position: relative;
font-weight: 700;
font-size: 1rem;
height: 1.7rem;
width: 1.7rem;
border-radius: 50%;
background: ${
	(props: IisDarkProps) => {
		if (props["isDark"]){
			return pallette[300];
		} else {
			return pallette[700];
		}
	}};

svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    fill: ${
	(props: IisDarkProps) => {
		if (props["isDark"]){
			return pallette[700];
		} else {
			return pallette[300];
		}
	}};
    ${normalTransition}
}

&:hover svg, &:focus svg {
    fill:  ${
	(props: IisDarkProps) => {
		if (props["isDark"]){
			return "url(#linearPrimary)";
		} else {
			return "url(#linearSecondary)";
		}
	}};
}
`;