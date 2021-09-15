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
    font-weight: 700;
    font-size: 1.5rem;
    padding: 1rem 0.7rem;
    margin: 0 3rem 0 0.3rem;
    outline: none;
    border: none;
    height: 4rem;
    width: 5rem;
    position: relative;

    svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        fill: ${
	(props: IisDarkProps) => {
		if (props["isDark"]){
			return pallette[300];
		} else {
			return pallette[700];
		}
	}};
        ${normalTransition}

        &:first-child {
            height: 100%;
            width: 100%;
            fill: ${
	(props: IisDarkProps) => {
		if (props["isDark"]){
			return pallette[300];
		} else {
			return pallette[700];
		}
	}};
            transform: translate(-50%, -50%) ${
	(props: IisDarkProps) => {
		if (props["isDark"]){
			return "scale(-1, 1)";
		} else {
			return "scale(1)";
		}
	}};
        }
        &:nth-child(2) {
            ${
	(props: IisDarkProps) => {
		if (props["isDark"]){
			return "left: 30%";
		} else {
			return "right: 0%; left: initial";
		}
	}};
        }
    }

    &:hover svg:nth-child(2), &:focus svg:nth-child(2) {
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