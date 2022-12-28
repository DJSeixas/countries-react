import styled from "styled-components";

export const Container = styled.div`
    background: ${props => props.theme.colors.bgColor};
    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 91vh;
`