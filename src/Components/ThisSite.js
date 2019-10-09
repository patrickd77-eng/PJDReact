import React, { Component } from "react";

class ThisSite extends React.Component {
  render() {
    return (
      <div>
        <section className="wrapper">
          <div className="inner">
            <section>
              <h2>This Site's Tech</h2>
              <p>Originally, I'd designed by site using .NET 4.7 and Umbraco 8. At the time this felt great, but then I thought...</p>
              <p>I don't need a SQL database for my site, I don't need all the extra framework, I don't need a CMS... So why not simplify everything?</p>
              <p>I then used React with React Router and the Bootstrap 4 CDN. I took design elements from my site but wrote it from scratch to do away with all the extra 'stuff'.</p>
              <p>The result is a clean, fast and efficient Single Page App. If this were for someone, I'd have used a headless CMS, But in my case I'd rather just edit the code and put it to Netlify.</p>
            </section>
            <section>
              <h2>What's the purpose of the site?</h2>
              <p>The site is a point of contact and it's aim is to demo some of the projects I've made.</p>
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default ThisSite;
