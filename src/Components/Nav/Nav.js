import React from "react";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    function changeClass() {
      var navToggler = document.getElementById("navtoggle");
      if (navToggler.classList.value.includes("fa-chevron-circle-down")) {
        navToggler.classList.remove("fa-chevron-circle-down");
        navToggler.classList.add("fa-chevron-circle-up");
      }
      else {
        navToggler.classList.remove("fa-chevron-circle-up");
        navToggler.classList.add("fa-chevron-circle-down");
      }
    }
    return (
      <nav className="navbar navbar-expand-sm sticky-top navbar-dark bg-dark ">
        <NavLink exact className="navbar-brand" to="/">
          <i data-toggle="collapse" data-target=".navbar-collapse.show" className="icon icon-large fa fa-home" aria-hidden="true"></i>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={changeClass}>
          <span id="navtoggle" className="icon icon-large fas fa-chevron-circle-down"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <div data-toggle="collapse" data-target=".navbar-collapse.show">
              <NavLink exact className="nav-item nav-link" to="/">
                Home
                </NavLink>
            </div>
            <div data-toggle="collapse" data-target=".navbar-collapse.show">
              <NavLink className="nav-item nav-link" to="/projects">
                Projects
                </NavLink>
            </div>
            <div data-toggle="collapse" data-target=".navbar-collapse.show" >
              <NavLink className="nav-item nav-link" to="/contact">
                Contact
                </NavLink>
            </div>
            <div data-toggle="collapse" data-target=".navbar-collapse.show">
              <NavLink className="nav-item nav-link" to="/about">
                About Me
                </NavLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
