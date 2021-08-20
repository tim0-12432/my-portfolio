import styled from "styled-components";
import { alignDisplayCenter } from "../../resources/constants/Mixins";

const PERSPECTIVE = 300;

const getScaleForParallax = (zTransformValue: number) => {
	return 1 + (zTransformValue * -1) / PERSPECTIVE;
};

export const ParallaxWrapper = styled.div`
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    perspective: ${PERSPECTIVE}px;
`;

export const ParallaxGroup = styled.div`
    position: relative;
    height: 100vh;
    background-color: white;
    ${alignDisplayCenter}
    transform-style: preserve-3d;
`;

const ParallaxLayer = styled.div`
    position: absolute;
    inset: 0;
    ${alignDisplayCenter}
`;

export const ParallaxBehindLayer = styled(ParallaxLayer)`
    transform: translateZ(-200px) scale(${getScaleForParallax(-200)});
`;

export const ParallaxBaseLayer = styled(ParallaxLayer)`
    transform: translateZ(0);
`;

export const ParallaxBeforeLayer = styled(ParallaxLayer)`
    transform: translateZ(150px) scale(${getScaleForParallax(150)});
`;