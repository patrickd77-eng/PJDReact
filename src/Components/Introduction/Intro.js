import React from "react";
import Me from "../Media/Me.jpg"
import { NavLink } from "react-router-dom";
class Intro extends React.Component {
  render() {
    return (
      <div>
        <section className="wrapper ">
          <div className="home-inner">
            <div className="container">
              <h2 className="mt-4">Hi. I'm Patrick.</h2>
              <img draggable="false" width="125px" className="rounded-circle float-right" height="auto" alt="Patrick Davis" src={Me}></img>
            </div>
            <div className="highlights">
              <section>
                <div className="content">
                  <h3 className="mb-5">Welcome to my site.</h3>
                  <p className="mb-4">I'm a undergraduate developer aiming to work as a Web Developer once graduated. Take a look around!</p>
                  <div class="row">
                    <div class="col">
                      <NavLink to="/projects">
                        <i className="icon fas fa-project-diagram"  />
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
                      </NavLink></div>
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