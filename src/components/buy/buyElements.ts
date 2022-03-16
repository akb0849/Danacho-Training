import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #6FB1BD;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
      width: 100%;
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
    height: 100%;
    margin-top: 100px;

`
export const Title = styled.div`
    color: black;
    font-size: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    
`

export const InputTitle = styled.div`
    color: #436169;
    margin-left: 9px;
`


export const Input = styled.input`
    width: 300px;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 2px solid black;
    height: 35px;
    font-size: 20px;
    text-indent: 10px;
    outline: none;
    background: transparent;
    @media (max-width: 768px) {
      width: calc(100vw - 50px) ;
    }
`

export const ConnectButton = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #EFC210;
    padding: 15px;
    width: 200px;
    border-radius: 25px;
    font-weight: bold;
`