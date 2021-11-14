import React, { createContext, useState } from "react";

const ThemeContext = createContext<any | null>(null);

const ThemeProvider: React.FC = ({children}) => {
	const [isDark, setIsDark] = useState<boolean>(false);

	const toggleTheme = () => {
		setIsDark(!isDark);
	};

	const value = {isDark, toggleTheme};

	return (
		<ThemeContext.Provider value={value}>
			{ children }
		</ThemeContext.Provider>
	);
};

export { ThemeContext, ThemeProvider };