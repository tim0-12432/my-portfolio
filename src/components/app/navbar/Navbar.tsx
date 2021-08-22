import React from "react";
import { Sticky } from "react-sticky";
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

export default Navbar;
