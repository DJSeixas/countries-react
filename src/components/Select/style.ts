import styled from "styled-components";

interface ListaProps{
    readonly visible: boolean
}

export const Container = styled.div`
    background-color: ${props => props.theme.colors.elem};
    color: ${props => props.theme.colors.text};
    width: 17rem;
    height: 5rem;
    position: absolute;
    border-radius: .5rem;
    padding: 0 1.8rem;
    top: 11rem;
    right: 12rem;
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.2);

    @media((max-width: 37.5em)){
        top: 18rem;
        left: 6rem;
        height: 4rem;
        width: 15rem;
    }
`
export const SelectButton = styled.button`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    cursor: pointer;

    background: none;
    border: none;
    font-size: 1.2rem;
    color: inherit;
`

export const Lista = styled.ul<ListaProps>`
    position: absolute;
    z-index: 10;
    width: 17rem;
    right: .1rem;
    border-radius: .5rem;
    background: ${props => props.theme.colors.elem};
    color: inherit;
    margin-top: .4rem;
    padding: 1.4rem 2rem;
    list-style: none;
    font-size: 1.3rem;

        @media((max-width: 37.5em)){
            width: 15rem;
        }

    opacity: ${props => props.visible ? 1 : 0};
    transition: all .2s ease;

    li{
        padding: .3rem;

        :hover{
            cursor: pointer;
            border-radius: .5rem;
            background-color: ${props => props.theme.colors.bgColor};
        }
    }
`