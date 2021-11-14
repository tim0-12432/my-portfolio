import { pallette, primary, secondary } from "./Colors";

export const logoFont = `
    font-family: "Upheaval", Arial, sans-serif;
    letter-spacing: 2px;
    user-select: none;
`;

export const normalFont = `
    font-family: Consolas, monaco, monospace;
`;

export const headline = `
    font-family: Consolas, monaco, monospace;
    background: linear-gradient(129deg, ${primary} 0%, ${secondary} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
    letter-spacing: -2px;
    font-size: 5.3rem;
    width: fit-content;
    padding: 5rem;
    user-select: none;
`;

export const normalLink = `
    ${normalFont}
    text-decoration: none;
`;

export const subHeadline = `
    font-family: Consolas, monaco, monospace;
    background: linear-gradient(129deg, ${pallette[200]} 0%, ${pallette[500]} 48%, ${pallette[200]} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
    letter-spacing: -2px;
    font-size: 3rem;
    width: fit-content;
    padding: 5rem;
    user-select: none;
`;

export const subSubHeadline = `
    font-family: Consolas, monaco, monospace;
    font-weight: 800;
    letter-spacing: -2px;
    font-size: 3rem;
    width: fit-content;
    padding: 0 2rem;
    color: pallette[500];
`;
