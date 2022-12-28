import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    text-align: center;

    background: ${props => props.theme.colors.bgColor};
    height: 91vh;
    width: 100%;

    color: white;
    font-size: 8rem;

    a{
        text-decoration: none;
    }
`