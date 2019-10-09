import React, { Component } from "react";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <section className="wrapper">
          <div className="inner">
            <div class="card card-outline-secondary">
              <div class="card-header">
                <h3 class="mb-0">Send Me A Message</h3>
              </div>
              <div class="card-body">
                <form class="form" role="form" data-netlify="true">
                  <fieldset>
                    <label for="name2" class="mb-0">Name*</label>
                    <div class="row mb-1">
                      <div class="col-lg-12">
                        <input type="text" name="name2" id="name2" class="form-control" required />
                      </div>
                    </div>
                    <label for="email2" class="mb-0">Email*</label>
                    <div class="row mb-1">
                      <div class="col-lg-12">
                        <input type="text" name="email2" id="email2" class="form-control" required />
                      </div>
                    </div>
                    <label for="message2" class="mb-0">Message*</label>
                    <div class="row mb-1">
                      <div class="col-lg-12">
                        <textarea rows="6" name="message2" id="message2" class="form-control" required></textarea>
                      </div>
                    </div>
                    <div class="form-row text-center">
                      <div class="col-12">
                        <button type="submit" class="btn btn-primary">Submit</button>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
          <div className="inner">
            <div id="services" class="card card-outline-secondary">
              <div class="card-header">
                <h3 class="mb-0">Cost Effective Websites / Apps</h3>
              </div>
              <div class="card-body">
                <p class="card-text">Why not check out my Fiverr pages. Maybe I can help you make your next website? If you're unsure, use the form above.</p>
                <ul class="list-group">
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    <a target="_blank"  rel="noopener noreferrer" href="https://www.fiverr.com/patrickdavis838/create-you-a-website-with-umbraco-cms?context_referrer=user_page&ref_ctx_id=8e3f8b59-560a-4795-a747-4000e6b1f87b&pckg_id=1&pos=1"><strong>Umbraco Website</strong></a>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    <a target="_blank"  rel="noopener noreferrer" href="https://www.fiverr.com/patrickdavis838/create-you-a-full-featured-blog-site?context_referrer=user_page&ref_ctx_id=8e3f8b59-560a-4795-a747-4000e6b1f87b&pckg_id=1&pos=2"><strong>Blogs</strong></a>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    <a target="_blank"  rel="noopener noreferrer" href="https://www.fiverr.com/patrickdavis838/create-you-an-apostrophecms-site?context_referrer=user_page&ref_ctx_id=8e3f8b59-560a-4795-a747-4000e6b1f87b&pckg_id=1&pos=3"><strong>React, Angular based site</strong></a>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    <strong>Need PC repairs based in Bournemouth? Just send me a message using the form!</strong>
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
