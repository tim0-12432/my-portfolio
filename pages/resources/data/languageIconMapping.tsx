import React from "react";
import { IoLogoJavascript, IoLogoPython, IoLogoElectron, IoLogoReact, IoLogoHtml5, IoLogoSass, IoLogoVue } from "react-icons/io5";
import { SiJava, SiTypescript, SiCoffeescript, SiAngular, SiCplusplus, SiCsharp, SiCss3, SiDart, SiPhp, SiGnubash, SiRuby } from "react-icons/si";

export const mapping: {[key: string]: JSX.Element} = {
	JavaScript: <IoLogoJavascript />,
	Java: <SiJava />,
	Python: <IoLogoPython />,
	TypeScript: <SiTypescript />,
	CoffeeScript: <SiCoffeescript />,
	Electron: <IoLogoElectron />,
	React: <IoLogoReact />,
	Dart: <SiDart />,
	CSharp: <SiCsharp />,
	CPP: <SiCplusplus />,
	CSS: <SiCss3 />,
	HTML: <IoLogoHtml5 />,
	SASS: <IoLogoSass />,
	Vue: <IoLogoVue />,
	Angular: <SiAngular />,
	PHP: <SiPhp />,
	Crystal: <SiRuby />,
	Bash: <SiGnubash />,
	Batch: <SiGnubash />
};

export default mapping;