import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Projects";
import Contact from "./Contact";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav class="navbar sticky-top navbar-dark bg-dark ">
            <NavLink exact className="navbar-brand" to="/">
              🏠
            </NavLink>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <NavLink exact className="nav-item nav-link" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-item nav-link" to="/stuff">
                  Stuff
                </NavLink>
                <NavLink className="nav-item nav-link" to="/contact">
                  Contact
                </NavLink>
              </div>
            </div>
          </nav>

          <section id="banner">
            <div className="inner">
              <header className="special">
                <h2>Patrick Jonathan Davis</h2>
              </header>
              <p>Web Developer Undergraduate</p>
            </div>
            <img src="https://wallpapermemory.com/uploads/695/code-wallpaper-hd-1080p-53043.jpg"></img>
          </section>

          <section className="wrapper">
            <div className="content section">
              <Route exact path="/" component={Home} />
              <Route path="/stuff" component={Stuff} />
              <Route path="/contact" component={Contact} />
            </div>
          </section>

          <footer id="footer">
            <div className="inner">
              <div className="content">
                <section>
                  <h4>Networks</h4>

                  <i
                    className="icon fab fa-fw fa-github"
                    aria-hidden="true"
                  ></i>
                  <a href="https://github.com/patrickd77-eng/" target="_blank">
                    GitHub
                  </a>
                  <i
                    className="icon fab fa-fw fa-linkedin"
                    aria-hidden="true"
                  ></i>
                  <a
                    href="https://www.linkedin.com/in/pdavis97/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                  <i
                    className="icon fa fa-fw fa-envelope-o"
                    aria-hidden="true"
                  ></i>
                  <a href="mailto:patrick_davis97@hotmail.co.uk?subject=Enquiry from your website">
                    Email
                  </a>
                  <i
                    className="icon fa fa-fw fa-graduation-cap"
                    aria-hidden="true"
                  ></i>
                  <a
                    href="https://www.bournemouth.ac.uk/study/courses/bsc-hons-business-information-technology"
                    target="_blank"
                  >
                    My Course
                  </a>
                </section>
              </div>
            </div>

            <div className="outer">
              <div className="copyright">
                <div>Patrick Jonathan Davis | © | 2019</div>
              </div>
            </div>
          </footer>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
