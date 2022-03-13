import styled from 'styled-components'
import {Menu} from '@styled-icons/boxicons-regular/Menu'
import {Instagram} from '@styled-icons/boxicons-logos/Instagram'
import {Twitter} from '@styled-icons/boxicons-logos/Twitter'
export const Wrapper = styled.div`
    width: 100vw;
    height: 60px;
    @media (max-width: 576px) {
        max-width:540px; 
        height: 190px;

    }
`

export const NavContainer = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  @media (max-width: 576px) {
        max-width:540px;     
  }
`

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & >img {
        height: 50px;
        width: 50px;
    }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  @media (max-width: 576px) {
        overflow: hidden;
        flex-direction: column;
        max-height: 300px;
        transition: max-height 0.3s ease-in;
        width: 100%;
    }
`

export const NavItemContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  @media (max-width: 576px) {
        overflow: hidden;
        flex-direction: column;
        max-height: 300px;
        transition: max-height 0.3s ease-in;
        width: 100%;
    }
  
`

export const NavItem = styled.div`
    margin-left: 50px;
    font-weight: bold;
`

export const  SocialMediaIconContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    @media (max-width: 576px){
        display: flex;
        flex-direction:row ;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
        margin-left: 30px;
    }
`

export const SocialMediaIcon = styled.div`
    background-color: #399ED9;
    border-radius: 50%;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Hamburger = styled(Menu)`
    display: none;

    @media (max-width: 576px) {
        display: block;
        color: black ;
        height: 50px;
        width: 50px;
    }
`

export const InstaIcon = styled(Instagram)`
    width: 25px;
    height: 25px;
    color: white;
`

export const TwitterIcon = styled(Twitter)`
    height: 25px;
    width: 25px;
    color: white;
`