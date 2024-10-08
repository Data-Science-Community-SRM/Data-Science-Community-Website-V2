import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

import "./NavigationItems.css";
import { ThemeContext } from "../../../context/theme-context";
import logo from "../../../assets/images/home-logo.png";
import logoLight from "../../../assets/images/home-logo-light.png";
import Toggle from "../../UI/ButtonToggle/ButtonToggle";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => {
  const [isOpen, setIsOpen] = useState(false);

  const themeContext = useContext(ThemeContext);

  const toggle = () => {
    setIsOpen(!isOpen);
    document.querySelector("#close-icon").classList.toggle("open");
  };

  return (
    <div>
      <Navbar
        style={{
          backgroundColor:
            window.innerWidth < 768
              ? "#6f389f"
              : themeContext.isDark
              ? "#232323"
              : "#f1f1f1",
          boxShadow: themeContext.isDark
            ? "1px 2px 10px #000000"
            : "1px 2px 10px #696969",
          width: "100vw",
          minHeight: "75px",
        }}
        dark
        fixed="top"
        expand="md"
      >
        <NavbarBrand href="/">
          {window.location.pathname === "/" ? null : (
            <img
              src={
                window.innerWidth < 768
                  ? logo
                  : themeContext.isDark
                  ? logo
                  : logoLight
              }
              alt=""
              width="50px"
            />
          )}
        </NavbarBrand>
        <NavbarToggler onClick={toggle}>
          <div id="close-icon">
            <span
              style={{
                backgroundColor: themeContext.isDark ? "#fefefe" : "#232323",
              }}
            ></span>
            <span
              style={{
                backgroundColor: themeContext.isDark ? "#fefefe" : "#232323",
              }}
            ></span>
            <span
              style={{
                backgroundColor: themeContext.isDark ? "#fefefe" : "#232323",
              }}
            ></span>
          </div>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="my-2 mx-auto" onClick={toggle}>
              <NavigationItem page="Home" href="/" />
            </NavItem>
            <NavItem className="my-2 mx-auto" onClick={toggle}>
              <NavigationItem page="Events" href="/events" />
            </NavItem>
            <NavItem className="my-2 mx-auto" onClick={toggle}>
              <NavigationItem page="Blog" href="/blog" />
            </NavItem>
            
            <NavItem className="my-2 mx-auto" onClick={toggle}>
              <NavigationItem page="Projects" href="/projects" />
            </NavItem>

            <NavItem className="my-2 mx-auto" onClick={toggle}>
              <NavigationItem page="People" href="/people" />
            </NavItem>
            <NavItem className="my-2 mx-auto" onClick={toggle}>
              <NavigationItem page="Contact Us" href="/contact-us" />
            </NavItem>
            <NavItem className="my-2 my-md-0 mx-auto pr-0 px-md-3">
              <Toggle />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationItems;
