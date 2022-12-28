import styled from "styled-components";

export const Container = styled.div`
    background: ${props => props.theme.colors.bgColor};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 10rem;

    height: 91vh;

    a{
        text-decoration: none;
    }
`