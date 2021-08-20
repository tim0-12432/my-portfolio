import styled from "styled-components";
import { pallette } from "../../resources/constants/Colors";

export const Progressbar = styled.div`
    position: fixed;
    background: ${pallette[200]};
    top: 0;
    right: 0;
    width: 10px;
    border-radius: 0 0 15px 15px;
`;

export const Scrollpath = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 10px;
    height: 100vh;
    background: transparent;
    z-index: 9999;
`;