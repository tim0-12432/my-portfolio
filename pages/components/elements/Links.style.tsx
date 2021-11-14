import styled from "styled-components";
import { normalTransition } from "../../resources/constants/Animations";
import { pallette } from "../../resources/constants/Colors";
import { normalFont } from "../../resources/constants/Fonts";

interface IisDarkProps {
    isDark?: boolean;
}

export const NavLink = styled.a.attrs<IisDarkProps>({})`
    ${normalFont}
    font-weight: 700;
    font-size: 1.5rem;
    padding: 1rem 0.7rem;
    margin: 0 0.3rem;
    text-decoration: none;
    color: ${
	(props: IisDarkProps) => {
		if (props["isDark"]){
			return pallette[300];
		} else {
			return pallette[700];
		}
	}};
    overflow: hidden;
    position: relative;
`;