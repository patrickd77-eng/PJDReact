import React, { Component } from "react";
import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";
import Intro from "../Introduction/Intro";
import Projects from "../ProjectsPage/Projects";
import Contact from "../ContactPage/Contact";
import About from "../AboutPage/About";
import Nav from "../Nav/Nav"
import Banner from "../Banner/Banner"
import Footer from "../Footer/Footer"
import fourohfour from './404.gif'

class Home extends Component {


  render() {
    const NoMatch = ({ location }) => (
      <div className="center mt-5">
    
        <div>
          <h3>No page exists at <code>{location.pathname}</code>, sorry.</h3>
        </div>
        <div className="mt-5">
          <NavLink exact to="/">
            <p>Here's my homepage...</p>
            <i className="icon icon-extralarge fa fa-home" aria-hidden="true"></i>
          </NavLink>
        </div>
        <div>
          <img width="100%" alt="An error message in animated gif form" className="mt-5 mb-5" src={fourohfour}></img>
        </div>
      </div>
    )
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Banner />
          <section>
            <div className="content section">
              <Switch>
                <Route exact path="/" component={Intro} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/about" component={About} />
                <Route component={NoMatch} />
              </Switch>
            </div>
          </section>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default Home;
