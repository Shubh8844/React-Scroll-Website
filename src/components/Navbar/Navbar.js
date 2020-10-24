import React from "react"
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink} from "./NavbarElemnets.js"
import {FaBars} from "react-icons/fa"
export default function Navbar(){
  return(
    <>
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">Dolla</NavLogo>
      <MobileIcon>
        <FaBars />
      </MobileIcon>
      <NavMenu>
        <NavItem>
          {/* note here to="about" not "/about" as this will act as id in scrollLink to sdownside application*/}
          <NavLinks to="about">About</NavLinks>
        </NavItem>
    
        <NavItem>
          {/* note here to="about" not "/about" as this will act as id in scrollLink to sdownside application*/}
          <NavLinks to="discover">Disocver</NavLinks>
        </NavItem>
      
        <NavItem>
          {/* note here to="about" not "/about" as this will act as id in scrollLink to sdownside application*/}
          <NavLinks to="services">Services</NavLinks>
        </NavItem>
      
        <NavItem>
          {/* note here to="about" not "/about" as this will act as id in scrollLink to sdownside application*/}
          <NavLinks to="SignUp">Sign In</NavLinks>
        </NavItem>
    </NavMenu>
    <NavBtn>
      <NavBtnLink to ="/signup">Sign In</NavBtnLink>
    </NavBtn>
    </NavbarContainer>
    </Nav>
    

    
    </>
  )
}