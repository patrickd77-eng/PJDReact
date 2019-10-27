import React from "react";
import Empaths from "../Media/Empaths.jpg";
import Apostrophe from "../Media/Apostrophe.jpg";
import Blog from "../Media/Blog.jpg";
import { Helmet } from "react-helmet";

class Projects extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>My Work | PJD</title>
        </Helmet>
        <section className="wrapper">
          <div className="container containerCustom">
            <h1>Projects</h1>
            <p>Here's some of my projects. Check out my <a title="My GitHub" href="https://github.com/patrickd77-eng/" rel="noopener noreferrer" target="_blank">GitHub</a> for more info.</p>
            <div className="card mb-3" >
              <div className="row no-gutters">
                <div className="col-lg-6">
                  <a title="Link to Empaths Site" target="_blank" rel="noopener noreferrer" href="https://www.empathsofficial.com"> <img draggable="false" src={Empaths} className="card-img" alt="Empaths Musicians" /></a>
                </div>
                <div className="col-lg-6">
                  <div className="card-body">
                    <h5 className="card-title mx-3">Empaths Official - Website</h5>
                    <p className="card-text mx-3">This site functions as a point of contact and breakdown about the music duo Empaths.</p>
                    <p className="card-text mx-3">I included Fontawesome & some of hvr.css for further styling.</p>
                    <p className="card-text mx-3">The site is served statically for the ultimate speed and caching policy.</p>
                    <p className="card-text mx-3">The motivation for this site help out an upcoming music duo increase brand awareness and have a responsive and smooth digital platform to communicate through.</p>
                    <p className="card-text mx-3"><small className="text-muted">Released October 2019 | <a className="btn btn-primary btn-sm" title="Link to site" target="_blank" rel="noopener noreferrer" href="https://www.empathsofficial.com">Link To Site</a> </small></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3" >
              <div className="row no-gutters">
                <div className="col-lg-6">
                  <a title="Link to Repo" target="_blank" rel="noopener noreferrer" href="https://github.com/patrickd77-eng/ApostropheCMSBootstrap4Skeleton"> <img draggable="false" src={Apostrophe} className="card-img" alt="Apostrophe CMS Logo" /></a>
                </div>
                <div className="col-lg-6">
                  <div className="card-body">
                    <h5 className="card-title mx-3">Apostrophe CMS - Template Repository</h5>
                    <p className="card-text mx-3">
                      This is an Apostrophe CMS Skeleton Kit that I released using Bootstrap 4. Check it out! I figured it'd help someone starting out with the CMS, which is useful for some bespoke projects.</p>
                    <p className="card-text mx-3">The community behind the CMS is quite small and it isn't something you'd see in industry, but it's relatively simple to use and could power quite basic sites.</p>
                    <p className="card-text mx-3"><small className="text-muted">September 2019 | <a className="btn btn-primary btn-sm" title="Link to Repo" target="_blank" rel="noopener noreferrer" href="https://github.com/patrickd77-eng/ApostropheCMSBootstrap4Skeleton">Link To Repo</a> </small></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3" >
              <div className="row no-gutters">
                <div className="col-lg-6">
                  <a title="Link to Repo" target="_blank" rel="noopener noreferrer" href="https://github.com/patrickd77-eng/DjangoBlogStarter"> <img draggable="false" src={Blog} className="card-img" alt="Apostrophe CMS Logo" /></a>
                </div>
                <div className="col-lg-6">
                  <div className="card-body">
                    <h5 className="card-title mx-3">Blog - Template Repository</h5>
                    <p className="card-text mx-3">
                      This is a Bootstrap 4 blog template that I released using the Django Framework. Check it out! I figured it'd help someone starting out with django, which is useful for quick projects using authentication.</p>
                    <p className="card-text mx-3">Because this is a template repo with instructions, it's very easy to be used or developed on. With some extra styling, a fully functional CRUD capable blog could be made.</p>
                    <p className="card-text mx-3"><small className="text-muted">September 2019 | <a className="btn btn-primary btn-sm" title="Link to Repo" target="_blank" rel="noopener noreferrer" href="https://github.com/patrickd77-eng/DjangoBlogStarter">Link To Repo & Picture Tour</a> </small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;
