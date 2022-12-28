import styled from "styled-components";

export const Container = styled.div`
    background: ${props => props.theme.colors.elem};
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    top: 11rem;
    left: 10rem;
    padding: 5px;
    position: absolute;
    height: 5rem;
    width: 40rem;
    border-radius: .5rem;
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.2);

    svg{
        height: 1.6rem;
        padding-left: 1.6rem;
        color: ${props => props.theme.colors.text};
    }
`

export const Input = styled.input.attrs({
    type: "text"
})`
    flex: 0 0 100%;
    background: ${props => props.theme.colors.elem};
    border: none;
    border-radius: .5rem;
    padding-left: 2rem;
    color: ${props => props.theme.colors.text};
    font-size: 1.2rem;
    font-family: inherit;
    outline: none;
    

    ::placeholder{
        color: inherit;
    }
`