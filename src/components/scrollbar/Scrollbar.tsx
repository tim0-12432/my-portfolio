import React, { useState } from "react";
import { Progressbar, Scrollpath } from "./Scrollbar.style";

function Scrollbar(): JSX.Element {
	const [height, setHeight] = useState(0);
	const totalHeight = document.body.scrollHeight - window.innerHeight;

	window.onscroll = function() {
		setHeight((window.pageYOffset / totalHeight) * 100);
	};

	return (
		<Scrollpath>
			<Progressbar style={{height: `${height}%`}} />
		</Scrollpath>
	);
}

export default Scrollbar;
