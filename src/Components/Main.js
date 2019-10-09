import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Stuff from "./Projects";
import Contact from "./Contact";
import About from "./About";
import Code from "../Media/Code.jpg"

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav class="navbar navbar-expand-md sticky-top navbar-dark bg-dark ">
            <NavLink exact className="navbar-brand" to="/">
              <i class="fa fa-home" aria-hidden="true"></i>
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
              <span class="fas fa-chevron-circle-down"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <NavLink exact className="nav-item nav-link" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-item nav-link" to="/stuff">
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

          <section id="banner">
            <div className="inner">
              <header className="special">
                <h2>Patrick Jonathan Davis</h2>
              </header>
              <p>Web Developer Undergraduate</p>
            </div>
            <img
              alt="code"
              src={Code}
            ></img>
          </section>


          <section>
            <div className="content section">
              <Route exact path="/" component={Home} />
              <Route path="/stuff" component={Stuff} />
              <Route path="/contact" component={Contact} />
              <Route path="/about" component={About} />
            </div>
          </section>


          <footer id="footer">
            <div className="inner">
              <div className="content">
                <section>
                  <div class="row">
                    <div class="container">
                      <div>
                        <a title="My GitHub" href="https://github.com/patrickd77-eng/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-github" aria-hidden="true" />
                        </a>
                      </div>
                      <div>
                        <a title="My LinkedIn" href="https://www.linkedin.com/in/pdavis97/" target="_blank" rel="noopener noreferrer">
                          <i className="fab  fa-linkedin" aria-hidden="true" />
                        </a>
                      </div>
                      <div>
                        <NavLink title="Contact Me" to="/contact">
                          <i className="fas fa-comment" aria-hidden="true" />
                        </NavLink>
                      </div>
                      <div>
                        <a title="My Degree" href="https://www.bournemouth.ac.uk/study/courses/bsc-hons-business-information-technology" rel="noopener noreferrer" target="_blank">
                          <i className="fa fa-user-graduate" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
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
