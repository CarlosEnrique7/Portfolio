import React from "react";
import { LinkText, NavLink, NavWrapper } from "../styledComponents";

interface NavbarProps {
  executeScroll: (loc: string) => any;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  location: string;
}

const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
  const navLinkClicked = (place: string) => {
    props.setLocation(place);
    props.executeScroll(place);
  };

  return (
    <div
      style={{
        left: "0",
        width: "100vw",
        height: "80px",
        display: "flex",
        justifyContent: "center",
        background: "rgba(15,14,14,0.5)",
        backdropFilter: "blur(3px)",
        position: "fixed",
      }}
    >
      <NavWrapper>
        <NavLink onClick={() => navLinkClicked("home")}>
          <LinkText textAlign="center" color={props.location === "home" ? "#F00874" : "rgba(255,255,255,0.5)"}>
            Home
          </LinkText>
          {props.location === "home" && <LinkText color="#F00874">_____________</LinkText>}
        </NavLink>
        <NavLink onClick={() => navLinkClicked("projects")}>
          <LinkText textAlign="center" color={props.location === "projects" ? "#F00874" : "rgba(255,255,255,0.5)"}>
            Projects
          </LinkText>
          {props.location === "projects" && <LinkText color="#F00874">_____________</LinkText>}
        </NavLink>
        <NavLink onClick={() => navLinkClicked("contact")}>
          <LinkText textAlign="center" color={props.location === "contact" ? "#F00874" : "rgba(255,255,255,0.5)"}>
            Contact
          </LinkText>
          {props.location === "contact" && <LinkText color="#F00874">_____________</LinkText>}
        </NavLink>
      </NavWrapper>
    </div>
  );
};

export default Navbar;
