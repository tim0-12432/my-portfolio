import React, { useContext } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import { Sticky } from "react-sticky";
import { ThemeContext } from "../../context/ThemeContext";
import { NavLink } from "../../elements/Links.style";
import { Spacer } from "../../flex/Flex.style";
import { Bar, LinkContainer, Logo, ToggleButton } from "./Navbar.style";

function Navbar(): JSX.Element {
	return (
		<Sticky>
			{
				({style}) =>
					<Bar style={style}>
						<Logo>Tim0_12432</Logo>
						<Link label="home" href="#home" />
						<Link label="about me" href="#about" />
						<Link label="portfolio" href="#portfolio" />
						<Link label="contact" href="#contact" />
						<Spacer />
						<ThemeToggle />
					</Bar>
			}
		</Sticky>
	);
}

function Link(props: {label: string, href: string}): JSX.Element {
	return (
		<LinkContainer>
			<NavLink href={props.href}>
				{props.label}
			</NavLink>
		</LinkContainer>
	);
}

function ThemeToggle(): JSX.Element {
	const {isDark, toggleTheme} = useContext(ThemeContext);
	return (
		<ToggleButton onClick={() => toggleTheme()}>
			{
				isDark
					? <IoSunny />
					: <IoMoon />
			}
		</ToggleButton>
	);
}

export default Navbar;
