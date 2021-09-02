import React from "react";
import { IoLogoJavascript, IoLogoPython, IoLogoElectron, IoLogoReact } from "react-icons/io5";
import { SiJava, SiTypescript, SiCoffeescript } from "react-icons/si";

export const mapping: {[key: string]: JSX.Element} = {
	JavaScript: <IoLogoJavascript />,
	Java: <SiJava />,
	Python: <IoLogoPython />,
	TypeScript: <SiTypescript />,
	CoffeeScript: <SiCoffeescript />,
	Electron: <IoLogoElectron />,
	React: <IoLogoReact />
};

export default mapping;