import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export const Img = styled.div`
    width: 56rem;
    height: 42rem;
    margin-right: 14rem;

    img{
        height: 100%;
        width: 100%;
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: ${props => props.theme.colors.text};
    font-size: 1.3rem;
    margin-left: 10rem;
    width: 30%;

    .borders{
        background-color: ${props => props.theme.colors.elem};
        border-radius: .5rem;
        box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.4);
        padding: .6rem;
        margin: .6rem;
    }
`

export const InfoLista = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 30rem;
    margin-bottom: -2rem;
    
    list-style: none;
    margin-top: 5rem;

    li{
        flex: 0 0 15%;
        margin-bottom: .7rem;
        padding-right: 2rem;
    }

    
    &.languages{
        display: inline-block;
        
    }

    span{         
                :not(:last-child){
                    ::after{
                        content: ",";
                        padding-left: .1rem;
                        padding-right: .4rem;
                    }  
                }
    }
`

export const Loading = styled.div`
    color: ${props => props.theme.colors.text};
    font-size: 4rem;
`