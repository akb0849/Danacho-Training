import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
//import {styled} from '@mui/styles'
import styled from 'styled-components'

export const Wrapper = styled.div`
    
    @media (max-width: 576px){
        width: 100vw;      
    }
`

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 250px;
  background-color: white;
  border: 2px solid #000;
  box-shadow: 24;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 25px;

  @media (max-width: 576px){
        width: 270px; 
    }
`

export const ConnectWalletButton = styled.div`
    color: white;
    @media (max-width: 768px){
        color: white;        
    }
`

export const ButtonContainer = styled.div``

export const Logo = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 30px;
`
export const ConnectButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 450px;
    height: 90px;
    border: 1px solid black;
    border-radius: 20px;
    margin-top: 20px;
    background-color: #EEC95A;

    @media (max-width: 768px){
        width: 230px;
        height: 80px;
    }


`
export const ButtonTitle = styled.div`
    color: white;
    font-weight: 600;
`
