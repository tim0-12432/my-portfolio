
export const normalTransition = `
    transition-delay: 0;
    transition-duration: 0.3s;
    transition-property: all;
    transition-timing-function: ease;
`;

export const clickAnimation = `
    animation-name: click;
    animation-duration: 3s;
    animation-delay: 0;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-timing-function: ease;

    @keyframes click {
        0%, 100% {
            transform: scale(1);
        }

        15% {
            transform: scale(0.85);
        }

        30% {
            transform: scale(1);
        }
    }
`;