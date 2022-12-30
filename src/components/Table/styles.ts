import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    margin-top: 14rem;
    padding: 0 5rem;

    @media((max-width: 37.5em)){
        margin-top: 15rem;
    }
`