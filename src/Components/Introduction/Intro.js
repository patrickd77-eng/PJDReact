import React from "react";
import Me from "../Media/Me.jpg"
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
                <div>
                  <img className="rounded mx-auto d-block" draggable="false" width="60%" height="100%" alt="Patrick Davis" src={Me}></img>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="highlights">
              <section>
                <div className="content">
                  <h3 className="mb-5">Welcome to my site</h3>
                  <p className="mb-5">I'm a undergraduate developer aiming to get into Web Development past University. Take a look around!</p>
                  <div class="row">
                    <div class="col">
                      <NavLink to="/projects">
                        <i className="icon fas fa-project-diagram" />
                        <p>Projects</p>
                      </NavLink></div>
                    <div class="col">
                      <NavLink to="/contact">
                        <i className="icon fas fa-envelope" />
                        <p>Contact</p>
                      </NavLink></div>
                    <div class="col">
                      <NavLink to="/about">
                        <i className="icon fas fa-address-card " />
                        <p>About</p>
                      </NavLink>
                    </div>
                    <div class="col">
                      <a title="Patrick Davis CV" target="_blank" rel="noopener noreferrer" href={CV}>
                        <i className="icon fas fa-file-download " />
                        <p>My 2019 CV</p>
                      </a></div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div >
    );
  }
}

export default Intro;
