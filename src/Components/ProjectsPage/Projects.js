import React from "react";
import Empaths from "../Media/Empaths.jpg";
import Apostrophe from "../Media/Apostrophe.jpg";
import ChloeTextiles from "../Media/ChloeTextiles.jpg";
import JulieArt from "../Media/JulieArt.jpg";
import CodeMac from "../Media/CodeMac.jpg";
class Stuff extends React.Component {
  render() {
    return (
      <div>
        <section className="wrapper">
          <div className="inner">
            <h1>Projects</h1>
            <p>Here's some of my projects. Check out my <a title="My GitHub" href="https://github.com/patrickd77-eng/" rel="noopener noreferrer" target="_blank">GitHub</a> for more info.</p>
            <div className="card mb-3" >
              <div className="row no-gutters">
                <div className="col-md-4">
                  <a title="Link to Empaths Site" target="_blank" rel="noopener noreferrer" href="https://www.empathsofficial.com"> <img draggable="false" src={Empaths} className="card-img" alt="Empaths Musicians" /></a>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Empaths Official Website</h5>
                    <p className="card-text"> This site functions as a point of contact and breakdown about the music duo Empaths.</p>
                    <p className="card-text">  I included Fontawesome & hvr.css for further styling.</p>
                    <p className="card-text">  The site is built with .NET and the CMS is Umbraco V8.</p>
                    <p className="card-text">The motivation for this site help out an upcoming music duo increase brand awareness and have a responsive and smooth digital platform to communicate through.</p>
                    <p className="card-text"><small className="text-muted">Released October 2019 | <a title="Link to site" target="_blank" rel="noopener noreferrer" href="https://www.empathsofficial.com">Link To Site</a> </small></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3" >
              <div className="row no-gutters">
                <div className="col-md-4">
                  <a title="Link to Repo" target="_blank" rel="noopener noreferrer" href="https://github.com/patrickd77-eng/ApostropheCMSBootstrap4Skeleton"> <img draggable="false" src={Apostrophe} className="card-img" alt="Apostrophe CMS Logo" /></a>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Apostrophe CMS Skeleton</h5>
                    <p className="card-text">
                      This is a Bootstrap 4 Skeleton that I released using Apostrophe CMS. Check it out! I figured it'd help someone starting out with the CMS, which is useful for some bespoke projects.</p>
                    <p>The community behind the CMS is quite small and it isn't something you'd see in industry, but it's relatively simple to use and could power quite basic sites.</p>
                    <p className="card-text"><small className="text-muted">September 2019 | <a title="Link to Repo" target="_blank" rel="noopener noreferrer" href="https://github.com/patrickd77-eng/ApostropheCMSBootstrap4Skeleton">Link To Repo</a> </small></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3" >
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img draggable="false" src={ChloeTextiles} className="card-img" alt="Textiles Print" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Elizabeth May Art</h5>
                    <p className="card-text">
                      This site will serve as a point of contact and breakdown about a Textiles graduate, with shopping cart tech upcoming.</p>
                    <p>The site will be a beautiful and fast art gallery featuring her prints and designs available for browsing or purchase.</p>
                    <p className="card-text"><small className="text-muted">Starting Soon</small></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3" >
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img draggable="false" src={JulieArt} className="card-img" alt="Julie's Painting" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Julie Davis Art</h5>
                    <p className="card-text">
                      This site will serve as a point of contact and shop for my Mother's art business.</p>
                    <p className="card-text">This is in progress but eventually it will be a full featured gallery and have shopping cart technology.</p>
                    <p className="card-text"><small className="text-muted">Starting Soon</small></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3" >
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img draggable="false" src={CodeMac} className="card-img" alt="This Website" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">This Website</h5>
                    <p className="card-text">
                      Originally, I'd designed my site using .NET 4.7 and Umbraco 8. At the time this felt great, but then I thought...</p>
                    <p className="card-text">I don't need a SQL database for my site, I don't need all the extra frameworks... So why not simplify everything?</p>
                    <p className="card-text">I then used React with Router and the Bootstrap 4 CDN. I took design elements from my site but wrote it entirely from scratch as an SPA.</p>
                    <p className="card-text"><small className="text-muted">Released October 2019</small></p>
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

export default Stuff;
