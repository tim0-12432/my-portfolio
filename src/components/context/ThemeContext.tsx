import React, { createContext, useContext, useReducer } from "react";

const ThemeContext = createContext<any | null>(null);

const ThemeProvider: React.FC = ({children}) => {
	const [state, dispatch] = useReducer(ThemeReducer, {dark: true});

	const value = {state, dispatch};
	return (
		<ThemeContext.Provider value={{value}}>
			{ children }
		</ThemeContext.Provider>
	);
};

const ThemeReducer = ({state, _action}: any) => {
	console.log(state);
	const newState = state.dark;
	return {dark: !newState};
};

const useTheme = () => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used inside a ThemeProvider!");
	}
	return context.value;
};

export { useTheme, ThemeProvider };