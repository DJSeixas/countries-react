import styled from "styled-components";

export const Container = styled.div`
    background: ${props => props.theme.colors.bgColor};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 10rem;
    width: 100vw;

    min-height: 92vh;

        @media((max-width: 37.5em)){
            padding: 0 5rem;
        }

    a{
        text-decoration: none;
    }
`