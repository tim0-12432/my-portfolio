import styled from "styled-components";
import { pallette } from "../../resources/constants/Colors";

export const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
`;

interface ISectionProps {
    isDark?: boolean;
}

export const AboutSection = styled(Section).attrs<ISectionProps>({})`
    background: ${
	(props: ISectionProps) => {
		if (props["isDark"]){
			return pallette[700];
		} else {
			return pallette[200];
		}
	}};
`;