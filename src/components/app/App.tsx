import lax from "lax.ts";
import React, { useEffect } from "react";
import { StickyContainer } from "react-sticky";
import { ThemeProvider } from "../context/ThemeProvider";
import Scrollbar from "../scrollbar/Scrollbar";
import About from "./about/About";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import Navbar from "./navbar/Navbar";
import Portfolio from "./portfolio/Portfolio";

function App(): JSX.Element {
	useEffect(() => {
		lax.init();

		lax.addDriver("scrollY", function () {
			return window.scrollY;
		});
	}, []);

	return (
		<ThemeProvider>
			<Scrollbar />
			<Home />
			<StickyContainer>
				<Navbar />
				<About />
				<Portfolio />
				<Contact />
				<Footer />
			</StickyContainer>
		</ThemeProvider>
	);
}

export default App;
