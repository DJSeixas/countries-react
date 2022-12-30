import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 28rem;
    width: 22rem;
    margin: 3rem 4rem;
    border-radius: .5rem;
    background-color: ${props => props.theme.colors.elem};
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.2);
    overflow: hidden;
    cursor: pointer;
    transition: all .3s;

    @media(max-width: 75em){
        height: 27rem;
        margin: 3rem;
    }

    @media((max-width: 37.5em)){
        width: 26rem;
        height: 30rem;
    }

    @media(min-width: 112.5em){
        margin: 3rem 7rem;
    }

    &:hover{
        transform: scale(1.1);
        transition: all .3s; 
    }

    a{
        text-decoration: none;
    }
`

export const Img = styled.div`
    flex: 1 0 50%;

    img{
        width: 100%;
        height: 13rem;

        @media(max-width: 75em){
        height: 12rem;
        }

        @media((max-width: 37.5em)){
        height: 16rem;
    }
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 1.6rem 2rem;
    color: ${props => props.theme.colors.text};

    h2{
        padding-bottom: 1.2rem;
    }

    p{
        padding: .3rem 0;
    }

    span{
        font-weight: 600;
    }
`