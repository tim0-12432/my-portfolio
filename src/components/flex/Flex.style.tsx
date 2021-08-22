import styled from "styled-components";

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

export const Column = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
`;

export const Container = styled.div`
    position: relative;
`;

export const Spacer = styled.div`
    flex-grow: 1;
    min-height: 20px;
    min-width: 20px;
`;