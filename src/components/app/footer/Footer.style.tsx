import styled from "styled-components";
import { pallette } from "../../../resources/constants/Colors";
import { normalFont } from "../../../resources/constants/Fonts";
import { Container } from "../../flex/Flex.style";

export const FooterContainer = styled(Container)`
    width: 100%;
    padding: 2rem 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

interface IisDarkProps {
    isDark?: boolean;
}

export const Paragraph = styled.p.attrs<IisDarkProps>({})`
    ${normalFont}
    font-size: 1.6rem;
    color: ${
	(props: IisDarkProps) => {
		if (props["isDark"]){
			return pallette[200];
		} else {
			return pallette[600];
		}
	}};
`;

export const Divider = styled.div.attrs<IisDarkProps>({})`
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
    svg {
        position: relative;
        display: block;
        width: calc(109% + 1.3px);
        height: 149px;
    }
    .shape-fill {
        fill: ${
	(props: IisDarkProps) => {
		if (props["isDark"]){
			return pallette[700];
		} else {
			return pallette[200];
		}
	}};
    }
`;

export const DividerContainer = styled(Container)`
    background: ${pallette[600]};
`;