import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import Home from "./Home";
import Stuff from "./Projects";
import Contact from "./Contact";
import About from "./About";
import Nav from "../Nav/Nav"
import Banner from "../Banner/Banner"
import Footer from "../Footer/Footer"

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Nav />
          <Banner />
          <section>
            <div className="content section">
              <Route exact path="/" component={Home} />
              <Route path="/stuff" component={Stuff} />
              <Route path="/contact" component={Contact} />
              <Route path="/about" component={About} />
            </div>
          </section>
        <Footer/>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
