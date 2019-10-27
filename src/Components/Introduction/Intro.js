import React from "react";
import CV from "./PJDCV2019.pdf"
import { NavLink } from "react-router-dom";
import {Helmet} from "react-helmet"; 

class Intro extends React.Component {
  render() {
    return (
      <div> 
       <Helmet>
      <title>Web Developer | PJD</title>
    </Helmet>
        <section className="wrapper ">
          <div className="home-inner">
            <div className="container mx-auto d-block">
              <div>
                <h1 className="mt-4 center">Hi. I'm Patrick.</h1>
              </div>
            </div>
            <div className="highlights">
              <section>
                <div className="content">
                  <h3 className="mb-5">Welcome to my site</h3>
                  <p className="mb-5">I'm a web developer and once I graduate I'd like to continue to work professionally with .NET and JavaScript based technologies. Take a look around!</p>
                  <div className="row">
                    <div className="col mt-5">
                      <NavLink to="/projects">
                        <i className="icon grow icon-extralarge fas fa-project-diagram" />
                        <hr></hr>
                        <strong>Projects</strong>
                      </NavLink></div>
                    <div className="col mt-5">
                      <NavLink to="/contact">
                        <i className="icon grow icon-extralarge fas fa-envelope" />
                        <hr></hr>
                        <strong>Contact Me</strong>
                      </NavLink></div>
                  </div>
                  <div className="row">
                    <div className="col mt-5">
                      <NavLink to="/about">
                        <i className="icon grow icon-extralarge fas fa-address-card " />
                        <hr></hr>
                        <strong>About Me</strong>
                      </NavLink>
                    </div>
                    <div className="col mt-5">
                      <a title="Patrick Davis CV" target="_blank" rel="noopener noreferrer" href={CV}>
                        <i className="icon grow icon-extralarge  fas fa-file-download " />
                        <hr></hr>
                        <strong>View My CV</strong>
                      </a>
                    </div>
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
