import styled from "styled-components";
import background from '../../assets/banner.png'

export const Wrapper = styled.div`
    background: url(${background});
    height: 100vh;
    width: 100vw;
    background-position: 0;
    background-size: 100vw 100vh;
    background-repeat: no-repeat;

    
    @media (max-width: 768px) {
        background-size: 100vw 100%;
        max-width: 100vw;
        height: 100%;
        margin-top: 72px;
    }
`
export const Container = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100vw;

    }
`

export const WelcomeTitle = styled.div`
    color: white;
    font-size: 72px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px){
        font-size: 25px;
        margin-top: 10px;
    }
`

export const SaleTitle = styled.div`
    margin-top: 20px;
    font-size: 30px;
    color: white;
    display: flex;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        font-size: 20px;
        margin-top: 5px;
    }
`

export const TimerWrapper = styled.div`
    margin-top: 10px;
    font-size: 20px;
    width: 100vw;
    display: flex;
    align-items:center;
    justify-content: center;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        &:first-child{
            display: flex;
            flex-direction: row;
        }
    }
`
export const TimerContainer = styled.div`
    margin-left:50px;
    margin-bottom: 10px;
    &:first-child{
        margin-left: 0px;
    }
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        &:first-child{
            display: flex;
            flex-direction: column;
        }
    }

`
export const Row = styled.div`
    display: flex;
    @media (max-width: 768px) {
        margin-left: 0;   
        align-items: center;
        justify-content: center;
        & > :nth-of-type(2){
            margin-left: 70px;
        }     
    }
`

export const Col = styled.div`
    display: flex;
    margin-left: 50px;
    @media (max-width: 768px) {
        margin-left: 0;  
        align-items: center;
        justify-content: center;      
    }
`
export const TimerNumber = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 32px;
    font-weight: bold;
    font-size: 30px;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        &:first-child{
            display: flex;
            flex-direction: column;
        }

        font-size: 20px;
    }
`

export const TimerTitle = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        &:first-child{
            display: flex;
            flex-direction: column;
        }
        font-size: 15px;
    }

`

