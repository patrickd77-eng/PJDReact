import React, { Component } from "react";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <section className="wrapper">
          <div className="inner">
            <div class="card card-outline-secondary">
              <div class="card-header">
                <h3 class="mb-0">Drop Me A Line</h3>
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
        </section>
      </div>
    );
  }
}

export default Contact;
