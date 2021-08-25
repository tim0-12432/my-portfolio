import React, { useContext } from "react";
import { IoSunny } from "react-icons/io5";
import { Sticky } from "react-sticky";
import { useTheme } from "../../context/ThemeContext";
import { Button } from "../../elements/Button.style";
import { NavLink } from "../../elements/Links.style";
import { Bar, LinkContainer, Logo } from "./Navbar.style";

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
	const {dispatch} = useTheme();

	return (
		<Button outlined onClick={() => dispatch()}>
			<IoSunny />
		</Button>
	);
}

export default Navbar;
