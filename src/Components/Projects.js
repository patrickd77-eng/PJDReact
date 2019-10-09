import React, { Component } from "react";
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

            <div class="card mb-3" >
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img draggable="false" src={Empaths} class="card-img" alt="Empaths Musicians" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Empaths Official Website</h5>
                    <p class="card-text"> This site functions as a point of contact and breakdown about the music duo Empaths.</p>
                    <p class="card-text">  I included Fontawesome & hvr.css for further styling.</p>
                    <p class="card-text">  The site is built with .NET and the CMS is Umbraco V8.</p>
                    <p class="card-text">The motivation for this site help out an upcoming music duo increase brand awareness and have a responsive and smooth digital platform to communicate through.</p>
                    <p class="card-text"><small class="text-muted">Released October 2019 | <a title="Link to site" target="_blank" rel="noopener noreferrer" href="https://www.empathsofficial.com">Link To Site</a> </small></p>
                  </div>
                </div>
              </div>
            </div>

            <div class="card mb-3" >
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img draggable="false" src={Apostrophe} class="card-img" alt="Apostrophe CMS Logo" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Apostrophe CMS Skeleton</h5>
                    <p class="card-text">
                      This is a Bootstrap 4 Skeleton that I released using Apostrophe CMS. Check it out! I figured it'd help someone starting out with the CMS, which is useful for some bespoke projects.</p>
                    <p>The community behind the CMS is quite small and it isn't something you'd see in Industry, but it's relatively simple to use and could power quite basic sites.</p>
                    <p class="card-text"><small class="text-muted">September 2019 | <a title="Link to Repo" target="_blank" rel="noopener noreferrer" href="https://github.com/patrickd77-eng/ApostropheCMSBootstrap4Skeleton">Link To Repo</a> </small></p>
                  </div>
                </div>
              </div>
            </div>


            <div class="card mb-3" >
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img draggable="false" src={ChloeTextiles} class="card-img" alt="Textiles Print" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Elizabeth May Art</h5>
                    <p class="card-text">
                      This site will serve as a point of contact and breakdown about a Textiles graduate, with shopping cart tech upcoming.</p>
                    <p>The site will be a beautiful and fast art gallery featuring her prints and designs available for browsing or purchase.</p>
                    <p class="card-text"><small class="text-muted">Starting Soon</small></p>
                  </div>
                </div>
              </div>
            </div>


            <div class="card mb-3" >
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img draggable="false" src={JulieArt} class="card-img" alt="Julie's Painting" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Julie Davis Art</h5>
                    <p class="card-text">
                      This site will serve as a point of contact and shop for my Mother's art business.</p>
                    <p class="card-text">This is in progress but eventually it will be a full featured gallery and have shopping cart technology.</p>
                    <p class="card-text"><small class="text-muted">Starting Soon</small></p>
                  </div>
                </div>
              </div>
            </div>

            <div class="card mb-3" >
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img draggable="false" src={CodeMac} class="card-img" alt="This Website" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">This Website</h5>
                    <p class="card-text">
                      I recently made this site to replace my Umbraco one.</p>
                    <p>Originally, I'd designed by site using .NET 4.7 and Umbraco 8. At the time this felt great, but then I thought...</p>
                    <p>I don't need a SQL database for my site, I don't need all the extra framework, I don't even <em>really</em> need a CMS... So why not simplify everything?</p>
                    <p>I then used React with React Router and the Bootstrap 4 CDN. I took design elements from my site but wrote it from scratch to do away with all the extra 'stuff'.
                      The result is a clean, fast and efficient Single Page App. The content is very static - so no CMS needed.</p>
                    <p class="card-text"><small class="text-muted">Released October 2019</small></p>
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
