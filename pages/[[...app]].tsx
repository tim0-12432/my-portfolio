import React, { useState, useEffect } from "react";
import App from "./components/app/App";

function EntryPoint(): JSX.Element | null {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}
	return <App />;
}

export default EntryPoint;