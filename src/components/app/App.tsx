import React from "react";
import { StickyContainer } from "react-sticky";
import { ThemeProvider } from "../context/ThemeProvider";
import About from "./about/About";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import Navbar from "./navbar/Navbar";
import Portfolio from "./portfolio/Portfolio";

function App(): JSX.Element {
	return (
		<ThemeProvider>
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
