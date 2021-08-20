import styled from "styled-components";
import { normalTransition } from "../../resources/constants/Animations";
import { pallette, primaryGradient, secondaryGradient } from "../../resources/constants/Colors";
import { normalFont } from "../../resources/constants/Fonts";

interface IButtonProps {
    primary?: boolean;
    secondary?: boolean;
    outlined?: boolean;
}

export const Button = styled.button.attrs<IButtonProps>({})`
    ${normalFont}
    position: relative;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 0.8rem 3rem;
    border-radius: 15px;
    border: none;
    outline: none;
    box-shadow: none;
    transform: none;
    ${normalTransition}
    background: ${
	(props: IButtonProps) => {
		if (props["outlined"]){
			return "transparent";
		} else {
			getGradient(props);
		}
	}};
    color: ${
	(props: IButtonProps) => {
		if (props["secondary"] && !props["outlined"]) {
			return pallette[600];
		} else {
			return pallette[200];
		}
	}};
    &:hover, &:focus {
        box-shadow: 12px 12px 15px 0px rgba(0,0,0,0.25);
        transform: translateY(-12px);
    }
    ${
	(props: IButtonProps) => {
		if (props["outlined"]){
			return `
                &::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    border: 3px solid transparent;
                    border-radius: 15px;
                    background: ${getGradient(props)} border-box;
                    -webkit-mask:
                        linear-gradient(#fff 0 0) content-box,
                        linear-gradient(#fff 0 0);
                    -webkit-mask-composite: destination-out;
                    mask-composite: exclude;
                }
                `;
		}
	}
}
`;

const getGradient = (props: IButtonProps) => {
	if (props["secondary"]) {
		return secondaryGradient;
	} else {
		return primaryGradient;
	}
};