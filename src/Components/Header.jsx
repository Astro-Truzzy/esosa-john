import React from "react";
//logo
import Logo from "../assets/logo.svg";
//link
import { Link } from "react-scroll";
const Header = () => {
  return (
    <header className="py-8" id="home">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="#">
            <img src={Logo} alt="" />
          </a>
          {/* button */}
          <Link smooth={true} spy={true} to="contact">
            {" "}
            <button className="btn btn-sm"> Work With Me </button>{" "}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
