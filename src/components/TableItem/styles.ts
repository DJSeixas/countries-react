import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 30rem;
    margin: 3rem 5rem;
    border-radius: .5rem;
    flex: 0 0 16%;
    background-color: ${props => props.theme.colors.elem};
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.2);
    overflow: hidden;
    cursor: pointer;
    transition: all .3s;

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