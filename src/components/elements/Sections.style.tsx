import styled from "styled-components";
import { pallette } from "../../resources/constants/Colors";

export const Section = styled.section`
    width: 100vw;
	background: ${pallette[600]};
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

export const FooterSection = styled(Section).attrs<ISectionProps>({})`
    background: ${
	(props: ISectionProps) => {
		if (props["isDark"]){
			return pallette[700];
		} else {
			return pallette[200];
		}
	}};
`;