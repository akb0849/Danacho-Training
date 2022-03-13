import React from 'react'
import { Wrapper,Hamburger,LogoContainer,NavContainer,NavItem,NavItemContainer,SocialMediaIcon,SocialMediaIconContainer, InstaIcon, TwitterIcon } from './navbarElements'
import LogoImage from '../../assets/logo1.png' 
const Navbar = () => {
  return (
    <Wrapper>
      <NavContainer>
      <LogoContainer>
          <img src={LogoImage} alt=""/>
        </LogoContainer>
        <Hamburger />
        <NavItemContainer>
          <NavItem>Buy</NavItem>
          <NavItem>About</NavItem>
          <NavItem>FAQ</NavItem>
          <NavItem>Contact</NavItem>
        </NavItemContainer>
        <SocialMediaIconContainer>
          <SocialMediaIcon><InstaIcon /></SocialMediaIcon>
          <SocialMediaIcon><TwitterIcon /></SocialMediaIcon>
        </SocialMediaIconContainer>
      </NavContainer>
    </Wrapper>
  )
}

export default Navbar