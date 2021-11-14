import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Progressbar, Scrollpath } from "./Scrollbar.style";

function Scrollbar(): JSX.Element {
	const [height, setHeight] = useState(0);
	const totalHeight = document.body.scrollHeight - window.innerHeight;

	window.onscroll = function() {
		setHeight((window.pageYOffset / totalHeight) * 100);
	};

	const {isDark} = useContext(ThemeContext);
	return (
		<Scrollpath>
			<Progressbar isDark={isDark} style={{height: `${height}%`}} />
		</Scrollpath>
	);
}

export default Scrollbar;
