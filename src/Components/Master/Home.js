import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import Intro from "../Introduction/Intro";
import Projects from "../ProjectsPage/Projects";
import Contact from "../ContactPage/Contact";
import About from "../AboutPage/About";
import Nav from "../Nav/Nav"
import Banner from "../Banner/Banner"
import Footer from "../Footer/Footer"

class Home extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Nav />
          <Banner />
          <section>
            <div className="content section">
              <Route exact path="/" component={Intro} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/about" component={About} />
            </div>
          </section>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default Home;
