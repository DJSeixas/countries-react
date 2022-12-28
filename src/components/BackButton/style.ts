import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 10rem;
    height: 3.4rem;
    padding: 0 2rem;
    margin: 4rem 0;
    background: ${props => props.theme.colors.elem};
    color: ${props => props.theme.colors.text};
    border: none;
    border-radius: .5rem;
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.2);
    font-family: inherit;
    font-size: 1.3rem;
    cursor: pointer;
`