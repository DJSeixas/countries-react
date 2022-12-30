import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media((max-width: 37.5em)){
        flex-direction: column;
        align-items: flex-start;
    }
`

export const Img = styled.div`
    margin-right: 12rem;

        @media(max-width: 75em){
            margin-right: 6rem;
        }

        @media(max-width: 56.25em){
        margin-right: 4rem;
        }

        @media(max-width: 43.75em){
        margin-right: 3rem;
        }

        @media((max-width: 37.5em)){
            margin-right: 0;
        }

    img{
        height: 34rem;
        width: 54rem;

        @media(max-width: 75em){
        height: 24rem;
        width: 36rem;
        }

        @media(max-width: 56.25em){
        height: 22rem;
        width: 32rem;
        }

        @media(max-width: 43.75em){
            width: 22rem;
            height: 20rem;
        }

        @media((max-width: 37.5em)){
            height: 22rem;
            width: 36rem;
        }
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: ${props => props.theme.colors.text};
    font-size: 1.3rem;
    margin-left: 8rem;
    width: 30%;

    .borders{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        width: 40rem;
        height: 8rem;
    }

        @media(max-width: 75em){
        margin-left: 4rem;
        width: 24%;
        }

        @media(max-width: 56.25em){
        margin-left: 3rem;
        width: 22%;
        }

        @media(max-width: 43.75em){
            margin-left: 2rem;
            width: 30%;
        }

        @media((max-width: 37.5em)){
            margin-left: 0;
            margin-top: 2rem;
            width: 100%;

            .space{
                margin-bottom: 3rem;
            }

            .borders{
                margin-bottom: 3rem;
            }
        }

    .bordersItem{
        background-color: ${props => props.theme.colors.elem};
        border-radius: .5rem;
        box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.4);
        padding: .6rem 1.2rem;
        margin: .6rem;   

        @media(max-width: 56.25em){
        border-radius: .3rem;
        padding: .4rem .8rem;
        margin: .4rem;
        }

        @media((max-width: 37.5em)){
            display: inline;
        }
    }
`

export const InfoLista = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 20rem;
    margin-bottom: 2rem;

        @media(max-width: 75em){
        height: 16rem;
        }

        @media((max-width: 37.5em)){
            flex-wrap: nowrap;
            height: 30rem;
        }
    
    list-style: none;
    margin-top: 5rem;

    li{
        flex: 0 0 15%;
        margin-bottom: .4rem;
        padding-right: 4rem;

        @media(max-width: 75em){
        padding-right: 2rem;
        }

        @media((max-width: 37.5em)){
            flex: 0 0 8%;
            padding-right: 0;
        }
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