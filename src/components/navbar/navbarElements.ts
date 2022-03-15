import styled from "styled-components";
import {Instagram} from '@styled-icons/boxicons-logos/Instagram'
import { Twitter } from "styled-icons/boxicons-logos";
interface Props{
    isOpen: any
}
export const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: black;
  font-weight: bold;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    color: #7b7fda;
  }
`;

export const Nav = styled.div`
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
  background-color: #DBE4E6;

  @media (max-width: 768px) {    
  }

`

export const Logo = styled.div`
  padding: 1rem 0;
  img {
    height: 40px;
    width: 40px;
  }
`;

export const Menu = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: black;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const SocialMediaContainer = styled.div<Props>`
  display: flex;
  @media (max-width: 768px) {
    max-height: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    transition: max-height 0.3s ease-in;
    margin-left: 69px;  
  }
`

export const SocialMediaIcon = styled.a`
  background-color: #399ED9;
  margin-left: 20px;
  border-radius:9990px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const InstaIcon = styled(Instagram)`
  width: 30px;
  height: 30px;
  color:white;
`

export const TwitterIcon = styled(Twitter)`
width: 30px;
height: 30px;
color: white;
`