import { primary, secondary } from "./Colors";

export const logoFont = `
    font-family: "Upheaval", Arial, sans-serif;
    letter-spacing: 2px;
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
`;
