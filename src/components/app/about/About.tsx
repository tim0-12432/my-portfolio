import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import { AboutSection } from "../../elements/Sections.style";
import { Column, Row } from "../../flex/Flex.style";
import { Headline } from "./About.style";

function About() {
	const {isDark} = useContext(ThemeContext);
	return (
		<AboutSection isDark={isDark} id="about">
			<Row>
				<Column>
        			<Headline>About Me</Headline>
				</Column>
			</Row>
		</AboutSection>
	);
}

export default About;
