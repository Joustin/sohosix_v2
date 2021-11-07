import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="nav-box d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3">
      <a className="mr-md-auto" href="/">
        <img
          className="logo-main animated fadeIn"
          src={"/img/logo_main.svg"}
          alt="sohosix.logo"
        />
      </a>

      <nav className="my-1 my-md-2">
        <NavLink exact to="/" className="nav-link">
          Home<span className="sr-only">(current)</span>
        </NavLink>
        <NavLink to="/Artists" className="nav-link">
          Artists
        </NavLink>
        <NavLink to="/Releases" className="nav-link">
          Releases
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
