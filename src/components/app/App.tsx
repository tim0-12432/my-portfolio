import React, { Suspense } from "react";
import { StickyContainer } from "react-sticky";
import { ModalProvider } from "../context/ModalContext";
import { ThemeProvider } from "../context/ThemeContext";
import Scrollbar from "../scrollbar/Scrollbar";
import Home from "./home/Home";

const About = React.lazy(() => import(/* webpackChunkName: "about" */"./about/About"));
const Contact = React.lazy(() => import(/* webpackChunkName: "contact" */"./contact/Contact"));
const Footer = React.lazy(() => import(/* webpackChunkName: "footer" */"./footer/Footer"));
const Navbar = React.lazy(() => import(/* webpackChunkName: "navbar" */"./navbar/Navbar"));
const Portfolio = React.lazy(() => import(/* webpackChunkName: "portfolio" */"./portfolio/Portfolio"));

function App(): JSX.Element {
	return (
		<ThemeProvider>
			<ModalProvider>
				<Scrollbar />
				<Home />
				<StickyContainer>
					<Suspense fallback={<div>Loading...</div>}>
						<Navbar />
						<About />
						<Portfolio />
						<Contact />
						<Footer />
					</Suspense>
				</StickyContainer>
			</ModalProvider>
		</ThemeProvider>
	);
}

export default App;
