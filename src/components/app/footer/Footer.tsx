import React, { useContext } from "react";
import { useTheme } from "../../context/ThemeContext";
import { FooterSection } from "../../elements/Sections.style";
import { FooterContainer, Paragraph, Divider, DividerContainer } from "./Footer.style";

function Footer(): JSX.Element {
	const {state: {dark}} = useTheme();
	return (
		<>
			<DividerContainer>
				<Divider isDark={dark}>
					<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
					</svg>
				</Divider>
			</DividerContainer>
			<FooterSection isDark={dark} id="copyright">
				<FooterContainer>
					<Paragraph isDark={dark}>
                    &copy; 2021 by Tim0_12432 | v1.0.0
					</Paragraph>
				</FooterContainer>
			</FooterSection>
		</>
	);
}

export default Footer;
