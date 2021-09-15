import React, { useContext } from "react";
import { IoMoon, IoSunny, IoToggle } from "react-icons/io5";
import { Sticky } from "react-sticky";
import { ThemeContext } from "../../context/ThemeContext";
import { NavLink } from "../../elements/Links.style";
import { Spacer } from "../../flex/Flex.style";
import { isMobileRatio } from "../utility";
import { Bar, LinkContainer, Logo, ToggleButton } from "./Navbar.style";

function Navbar(): JSX.Element {
	const {isDark} = useContext(ThemeContext);
	return (
		<Sticky>
			{
				({style}) =>
					<Bar isDark={isDark} style={style} id="navbar">
						<Logo>Tim0_12432</Logo>
						{
							!isMobileRatio() &&
							<>
								<Link label="home" href="#home" />
								<Link label="about me" href="#about" />
								<Link label="portfolio" href="#portfolio" />
								<Link label="contact" href="#contact" />
							</>
						}
						<Spacer />
						<ThemeToggle />
					</Bar>
			}
		</Sticky>
	);
}

function Link(props: {label: string, href: string}): JSX.Element {
	const {isDark} = useContext(ThemeContext);
	return (
		<LinkContainer isDark={isDark}>
			<NavLink href={props.href} isDark={isDark}>
				{props.label}
			</NavLink>
		</LinkContainer>
	);
}

function ThemeToggle(): JSX.Element {
	const {isDark, toggleTheme} = useContext(ThemeContext);
	return (
		<ToggleButton isDark={isDark} onClick={() => toggleTheme()}>
			<IoToggle />
			{
				isDark
					? <IoSunny />
					: <IoMoon />
			}
		</ToggleButton>
	);
}

export default Navbar;
