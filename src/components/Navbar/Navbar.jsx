import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./Navbar.css";
import images from "../../constants/images";
import { Link } from "react-scroll";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar">
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img src={images.gericht} alt="app logo" />
        </div>
        <ul className="app__navbar-links">
          <li className="p__opensans">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="p__opensans">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="p__opensans">
            <Link to="menu" smooth={true} duration={500}>
              Menu
            </Link>
          </li>
          <li className="p__opensans">
            <Link to="awards" smooth={true} duration={500}>
              Awards
            </Link>
          </li>
          <li className="p__opensans">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="app__navbar-login">
          <a href="#login" className="p__opensans">
            Log In / Register
          </a>
          <div />
          <a href="/" className="p__opensans">
            Book Table
          </a>
        </div>
        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu
            cursor="pointer"
            color="#fff"
            fontSize={27}
            onClick={() => setToggleMenu(true)}
          />
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu
                fontSize={27}
                className="overlay__close"
                onClick={() => {
                  setToggleMenu(false);
                }}
              />
              <ul className="app__navbar-smallscreen-links">
                <li className="p__opensans">
                  <Link to="home" smooth={true} duration={500} onClick={() => setToggleMenu(false)}>
                    Home
                  </Link>
                </li>
                <li className="p__opensans">
                  <Link to="about" smooth={true} duration={500} onClick={() => setToggleMenu(false)}>
                    About
                  </Link>
                </li>
                <li className="p__opensans">
                  <Link to="menu" smooth={true} duration={500} onClick={() => setToggleMenu(false)}>
                    Menu
                  </Link>
                </li>
                <li className="p__opensans">
                  <Link to="awards" smooth={true} duration={500} onClick={() => setToggleMenu(false)}>
                    Awards
                  </Link>
                </li>
                <li className="p__opensans">
                  <Link to="contact" smooth={true} duration={500} onClick={() => setToggleMenu(false)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
