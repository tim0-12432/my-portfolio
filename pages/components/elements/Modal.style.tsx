import styled from "styled-components";
import { pallette } from "../../resources/constants/Colors";
import { isMobileRatio } from "../app/utility";
import { Card } from "./Card.style";

interface IOffsetProps {
    offset?: number;
}

export const Background = styled.div.attrs<IOffsetProps>({})`
    background: ${pallette[200]};
    opacity: 0.3;
    position: absolute;
    z-index: 99999999999999;
    top: ${
	(props: IOffsetProps) => {
		if (props["offset"]){
			return props["offset"];
		} else {
			return 0;
		}
	}}px;
    left: 0;
    width: 100vw;
    height: 100vh;
`;

export const Modal = styled(Card).attrs<IOffsetProps>({})`
    position: absolute;
    ${
	isMobileRatio()
		? "width: calc(100vw - 10rem);" : null
}
    padding: 3rem;
    top: calc(${
	(props: IOffsetProps) => {
		if (props["offset"]){
			return props["offset"];
		} else {
			return 0;
		}
	}}px + 50vh);
    left: 50vw;
    transform: translate(-50%, -50%);
    z-index: 100000000000000;
    overflow: scroll;
`;