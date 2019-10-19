import React from "react";
import CV from "./PJDCV2019.pdf"
import { NavLink } from "react-router-dom";
class Intro extends React.Component {
  render() {
    return (
      <div>
        <section className="wrapper ">
          <div className="home-inner">
            <div className="container mx-auto d-block">
              <div>
                <h2 className="mt-4 center">Hi. I'm Patrick.</h2>
              </div>
            </div>
            <div className="highlights">
              <section>
                <div className="content">
                  <h3 className="mb-5">Welcome to my site</h3>
                  <p className="mb-5">I'm a undergraduate web developer and once I graduate I'd like to work professionally with either .NET or JavaScript based stacks. Take a look around!</p>
                  <div class="row">
                    <div class="col">
                      <NavLink to="/projects">
                        <i className="icon fas fa-project-diagram" />
                        <hr></hr>
                        <strong>Projects</strong>
                      </NavLink></div>
                    <div class="col">
                      <NavLink to="/contact">
                        <i className="icon fas fa-envelope" />
                        <hr></hr>
                        <strong>Contact Me</strong>
                      </NavLink></div>
                    <div class="col">
                      <NavLink to="/about">
                        <i className="icon fas fa-address-card " />
                        <hr></hr>
                        <strong>About Me</strong>
                      </NavLink>
                    </div>
                    <div class="col">
                      <a title="Patrick Davis CV" target="_blank" rel="noopener noreferrer" href={CV}>
                        <i className="icon fas fa-file-download " />
                        <hr></hr>
                        <strong>My 2019 CV</strong>
                      </a></div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Intro;
