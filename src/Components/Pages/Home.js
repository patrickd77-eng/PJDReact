import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <section className="wrapper ">
          <div className="home-inner">
            <div className="highlights ">
              <section>
                <div className="content">
                  <header>
                    <i className="icon far fa-file-code" ></i>
                    <h3>Experience in Industry</h3>
                  </header>
                  <p><span>My industry placement was over a year long, spent at a </span><a rel="noopener noreferrer" target="_blank" href="http://www.greenwoodcampbell.com/">prominent digital agency</a><span> and then briefly worked for a </span><a rel="noopener noreferrer" target="_blank" href="http://www.lv.com/">major insurer</a><span>. This was mostly .NET web development and content management respectively.</span></p>
                </div>
              </section>
              <section>
                <div className="content">
                  <header>
                    <i className="icon fas fa-university"></i>
                    <h3>University</h3>
                  </header>
                  <p><span>I am studying Computer Science (Business Information Technology) at Bournemouth University. I'm predicted to graduate with a 2/1.</span></p>
                </div>
              </section>
              <section>
                <div className="content">
                  <header>
                    <i className="icon fas fa-handshake" ></i>
                    <h3>Unique Mindset</h3>
                  </header>
                  <p><span>I chose a broad field of study as I didn't want to lock myself down. I aim to take core concepts from my course to become an IT professional within Web Development.</span></p>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
