import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import logo from "../../assets/icons/logo.svg";

export const NavBar = () => {
  return (
    <div className="navbar">
      <nav className="navbar__navigation">
        <ul className="navbar__list">
          <li className="navbar__item navbar__item--active">
            <div className="navbar__line--active"></div>
            <Link to="/">
              <img src={logo} alt={"Logo da página"} />
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/lista">
              <HomeWorkOutlinedIcon />
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/cadastrar">
              <StorefrontOutlinedIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
