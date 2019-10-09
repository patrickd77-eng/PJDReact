import React from "react";
import Me from "../Media/Me.jpg"

class Intro extends React.Component {
  render() {
    return (
      <div>
        <section className="wrapper ">
          <div className="home-inner">
            <div className="container">
              <h2 className="mt-4">Hi. I'm Patrick.</h2>
              <img draggable="false" width="133px" className="rounded-circle float-right" height="auto" alt="Patrick Davis" src={Me}></img>
            </div>
            <div className="highlights">
              <section>
                <div className="content">
                  <header>
                    <i className="icon fas fa-laptop-code" ></i>
                    <h3>Welcome to my site.</h3>
                  </header>
                  <p></p>
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
