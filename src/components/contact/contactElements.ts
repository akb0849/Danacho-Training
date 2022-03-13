import styled from 'styled-components';

export const Wrapper = styled.div`
height: 100%;
width: 100vw;
background-color: #6FB1BD;
display: flex;
flex-direction: column;
`

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%
`

export const TopContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 576px) {
        flex-direction: column ;
    }
`

export const BottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    @media (max-width: 576px) {
        flex-direction: column ;
    }
`

export const LeftContainer = styled.div`
    display: flex;
    margin-left: 60px;
    margin-top: 60px;
    & > img{
        width: 90px;
        height: 90px;
    }
    @media (max-width: 576px) {
        display: flex;
        flex-direction: column ;
        align-items: center;
        justify-content: center;
        margin-right: 50px;
    }
`

export const RightContainer = styled.div`
display: flex;
flex-direction: column;
@media (max-width: 576px) {
        flex-direction: column ;
    }

`

export const TopFieldContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-right: 50px;
    @media (max-width: 576px) {
        flex-direction: column ;
    }
`

export const BottomFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    margin-right: 50px;
    @media (max-width: 576px) {
        flex-direction: column ;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
  

`

export const TopField = styled.input`
    margin-top: 20px;
    width: 200px;
    background: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid white;
    outline:none;
    color: white;
    height: 30px;
    margin-left: 25px;
    &::placeholder{
        color: white
    }
    @media (max-width: 576px){
        width: 250px;
        margin-left: 50px;
    }
`

export const BottomField = styled.input`
    margin-top: 20px;
    width: 423px;
    background: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid white;
    outline:none;
    color: white;
    height: 30px;
    &::placeholder{
        color: white
    }

    @media (max-width: 576px) {
        flex-direction: column ;
        width: 250px;
        margin-right: 0;
    }
`

export const Footer = styled.div`
    color: white;
    margin-top: 20px;
    @media (max-width: 576px) {
        display: flex;
        flex-direction: column ;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
    }
`

export const Title = styled.div`
    color: white;
    font-size: 23px;
    margin-top: 40px;
    margin-left: 23px;
    @media (max-width: 576px) {
        display: flex;
        flex-direction: column ;
        align-items: center;
        justify-content: center;
    }
`
export const SendButton = styled.div`
    display: flex;
    width: 100px;
    margin-top: 20px;
    margin-left: 25px;
    height: 30px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px;
    background-color: white;
    color: black;
    border-radius: 12px;
    @media (max-width: 576px) {
        display: flex;
        flex-direction: column ;
        align-items: center;
        justify-content: center;
        margin-left:110px;
    }
`