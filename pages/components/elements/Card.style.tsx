import styled from "styled-components";
import { pallette } from "../../resources/constants/Colors";

export const Card = styled.div`
    padding: 0.5rem;
    background: ${pallette[700]};
    box-shadow: 12px 12px 15px 0px rgba(0,0,0,0.25);
    color: ${pallette[400]};
    border-radius: 15px;
`;