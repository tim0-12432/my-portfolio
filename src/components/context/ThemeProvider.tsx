import React, { createContext, useState } from "react";

const ThemeContext = createContext<any | null>(null);

const ThemeProvider: React.FC = ({children}) => {
	const [isDark, setIsDark] = useState<boolean>(false);

	const toggleTheme = () => {
		setIsDark(!isDark);
	};

	return (
		<ThemeContext.Provider value={{isDark}}>
			{ children }
		</ThemeContext.Provider>
	);
};

export { ThemeContext, ThemeProvider };