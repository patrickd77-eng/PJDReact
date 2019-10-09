import React from "react";
import {  NavLink } from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
<nav className="navbar navbar-expand-md sticky-top navbar-dark bg-dark ">
            <NavLink exact className="navbar-brand" to="/">
              <i className="fa fa-home" aria-hidden="true"></i>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="fas fa-chevron-circle-down"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink exact className="nav-item nav-link" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-item nav-link" to="/projects">
                  Projects
                </NavLink>
                <NavLink className="nav-item nav-link" to="/contact">
                  Contact
                </NavLink>
                <NavLink className="nav-item nav-link" to="/about">
                  About Me
                </NavLink>
              </div>
            </div>
          </nav>
          );
        }
      }
      
      export default Nav;
      