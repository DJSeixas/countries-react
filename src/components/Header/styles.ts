import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    top: 0;
    height: 7rem;
    background: ${props => props.theme.colors.elem};
    padding: 0 10rem;
`

export const Title = styled.h1`
    font-size: 2.1rem;
    font-weight: 700;
    color: ${props => props.theme.colors.text};
`

export const Switcher = styled.span`
    color: ${props => props.theme.colors.text};
    font-size: 1.7rem;
    font-weight: 400;

    svg{
        padding-right: 1rem;
        cursor: pointer;
    }
` 