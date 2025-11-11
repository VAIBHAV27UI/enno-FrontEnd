import { Container, Nav, Navbar } from "react-bootstrap";
import classes from "./Header.module.css";
import Button1 from "../Button1";
import { NavLink } from "react-router-dom";

const Header = () => {
  const menu = [
    { name: "Home", link: "/home" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/service" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Products", link: "/products" },
    { name: "Testimonial", link: "/testimonial" },
    { name: "Team", link: "/team" },
    { name: "Contact", link: "/contact" },
    // { name: "Counter", link: "/counter" }
  ];

  return (
    <>
      <Navbar expand="lg" className="shadow sticky-top bg-white">
        <Container>
          <Navbar.Brand id="brand" href="/">eNno</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`ms-auto ${classes.navbar}`}>
              {menu.map((data, i) => {
                return (
                  <NavLink 
                  key={i}                
                  to={data.link}
                  className={({isActive}) => { return isActive? classes.active : ""}}
                  >
                    {data.name}
                  </NavLink>
                );
              })}
            </Nav>
          </Navbar.Collapse>

          <Button1 />
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
