import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 100%;
    width: 100vw;
    background-color: #6FB1BD;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px){
    }
    @media (min-width: 1440px ) {
        height: 100%;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    @media (max-width: 768px){
    }

    @media (min-width: 1440px ) {
        height: 100%;
        margin-top: 20px;
    }

`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    &:nth-of-type(4){
            padding-bottom: 30px;
    }
`

export const InfoTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
    font-weight: bold;
    font-size: 25px;
    @media (max-width: 768px){
        font-size: large;
    }
`

export const InfoDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
    width: 500px;
    margin-top: 20px;
  
    @media (max-width: 760px){
        width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-left: 20px;
    }
`