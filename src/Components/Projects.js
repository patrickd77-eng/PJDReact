import React, { Component } from "react";

class Stuff extends React.Component {
  render() {
    return (
      <div>
        <section className="wrapper">
          <div className="inner">
            <h1>Projects</h1>
            <p>Here's some of my projects. Check out my <a title="My GitHub" href="https://github.com/patrickd77-eng/" target="_blank">GitHub</a> for more info.</p>

            <div class="card mb-3" >
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img draggable="false" src="https://www.empathsofficial.com/media/0wgpr0wt/avatar-group-photo.jpg?width=400&height=400" class="card-img" alt="Empaths Musicians" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Empaths Official Website</h5>
                    <p class="card-text">
                      This site functions as a point of contact and breakdown about the music duo Empaths.
                      I included Fontawesome & hvr.css for further styling.
                      The site is built with .NET and the CMS is Umbraco V8.
                      The motivation for this site help out an upcoming music duo increase brand awareness and have a responsive and smooth digital platform to communicate through.</p>
                    <p class="card-text"><small class="text-muted">Released October 2019 | <a title="Link to site" target="_blank" href="https://www.empathsofficial.com">Link To Site</a> </small></p>
                  </div>
                </div>
              </div>
            </div>

            <div class="card mb-3" >
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img draggable="false" src="data:image/png;base64,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" class="card-img" alt="Empaths Musicians" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Apostrophe CMS Skeleton</h5>
                    <p class="card-text">
                       This is a Bootstrap 4 Skeleton that I released using Apostrophe CMS. Check it out! I figured it'd help someone starting out with the CMS, which is useful for some bespoke projects.</p>
                    <p class="card-text"><small class="text-muted">September 2019 | <a title="Link to Repo"  target="_blank" href="https://github.com/patrickd77-eng/ApostropheCMSBootstrap4Skeleton">Link To Repo</a> </small></p>
                  </div>
                </div>
              </div>
            </div>


            <div class="card mb-3" >
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img draggable="false" src="https://www.patrickdavis.co.uk/media/xktfy3gf/textiles-long.jpg" class="card-img" alt="Textiles Print" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Elizabeth May Art</h5>
                    <p class="card-text">
                      This site will serve as a point of contact and breakdown about the graduate Chloe Farrington, with shopping cart tech upcoming.</p>
                    <p class="card-text"><small class="text-muted">In Progress</small></p>
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
