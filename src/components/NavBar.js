import React from "react";
import ScrollToTop from "react-scroll-to-top";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="home" className="navbar">
      <ScrollToTop smooth color="blue" style={{ textAlign: "center" }} />
      <div>
        <img className="logo" src=".\photo\pl1.png" alt="pizzaHut" />
      </div>

      <div className="navleft">
        <AnchorLink href="/contact">Firuz: 998 933 488 522</AnchorLink>
        <Link to="/">Menu</Link>
        <AnchorLink href="/contact">Contact</AnchorLink>
        <Link to="/productmanage">Admin</Link>
      </div>
    </div>
  );
};

export default NavBar;
