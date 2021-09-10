import styled from "styled-components";
import { clickAnimation } from "../../resources/constants/Animations";

export const Pointer = styled.div`
    z-index: 100;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 5rem;
    height: 5rem;
    transform: translate(25%, 25%);

    svg {
        height: 100%;
        width: 100%;
        fill: url(#linearPrimary);
        ${clickAnimation}
    }
`;