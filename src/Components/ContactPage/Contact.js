import React from "react";
import ContactForm from './ContactForm/ContactForm';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <section className="wrapper">
          <div className="container containerCustom">
            <ContactForm />
          </div>
          <hr></hr>
          <div className="container containerCustom">
            <div id="services" className="card card-outline-secondary">
              <div className="card-header">
                <h3 className="mb-0 center">Cost Effective Websites / Apps</h3>
              </div>
              <div className="card-body">
                <p className="card-text mb-3 ml-3">Why not check out my Fiverr pages. Maybe I can help you make your next website? If you're unsure, use the form above.</p>
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.fiverr.com/patrickdavis838/create-you-a-website-with-umbraco-cms?context_referrer=user_page&ref_ctx_id=8e3f8b59-560a-4795-a747-4000e6b1f87b&pckg_id=1&pos=1"><strong>Umbraco Website</strong></a>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.fiverr.com/patrickdavis838/create-you-a-full-featured-blog-site?context_referrer=user_page&ref_ctx_id=8e3f8b59-560a-4795-a747-4000e6b1f87b&pckg_id=1&pos=2"><strong>Blogs</strong></a>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.fiverr.com/patrickdavis838/create-you-an-apostrophecms-site?context_referrer=user_page&ref_ctx_id=8e3f8b59-560a-4795-a747-4000e6b1f87b&pckg_id=1&pos=3"><strong>Single Page Websites (React, Angular)</strong></a>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>Need PC repairs based in Bournemouth? Just send me a message using the form!</strong>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>Source code and hosting available per order.</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
