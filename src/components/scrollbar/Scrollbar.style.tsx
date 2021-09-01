import styled from "styled-components";
import { pallette } from "../../resources/constants/Colors";

interface IisDarkProps {
    isDark?: boolean;
}

export const Progressbar = styled.div.attrs<IisDarkProps>({})`
    position: fixed;
    background: ${
	(props: IisDarkProps) => {
		if (props["isDark"]){
			return pallette[700];
		} else {
			return pallette[200];
		}
	}};
    top: 0;
    right: 0;
    width: 10px;
    border-radius: 0 0 15px 15px;
`;

export const Scrollpath = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 10px;
    height: 100vh;
    background: transparent;
    z-index: 9999;
`;