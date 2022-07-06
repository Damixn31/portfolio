import React, { useState } from "react";
import {
  IconLogo,
  IconLogoMobile,
  Menu,
  MenuItem,
  MenuItemLink,
  NavBarContainer,
  NavBarWrapper,
} from "./NavBar.elements";
import { AiOutlineCode } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Nav() {
    
  const [click, setclick] = useState(false);

  const ChangeClick = () => {
    setclick(!click);
    console.log(click)
  }

  return (
    <>
      <NavBarContainer>
        <NavBarWrapper>
          <IconLogo>
            <AiOutlineCode size={"2rem"} color={"#ff71e3"} />
           <h2>ƉɅ</h2>
          </IconLogo>

          <IconLogoMobile onClick = { () => ChangeClick()}>
            {
             click ? <FaTimes /> : <FaBars />
            }
          </IconLogoMobile>

          <Menu click={click}>
            <MenuItem>
              <MenuItemLink onClick = { () => ChangeClick()}>Home</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick = { () => ChangeClick()}>About Us</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick = { () => ChangeClick()}>Proyects</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick = { () => ChangeClick()}>Contact</MenuItemLink>
            </MenuItem>
          </Menu>
        </NavBarWrapper>
      </NavBarContainer>
    </>
  );
}
