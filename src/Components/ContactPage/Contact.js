import React from "react";
import ContactForm from './ContactForm/ContactForm';
import { Helmet } from "react-helmet";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Contact Me | PJD</title>
        </Helmet>
        <section className="wrapper">
          <div className="container containerCustom">
            <ContactForm />
          </div>
          <hr></hr>
          <div className="container containerCustom">
            <div id="services" className="card card-outline-secondary">
              <div className="card-header">
                <h3 className="mb-0 center">Cost Effective PC Help</h3>
              </div>
              <div className="card-body">
                <ul>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>Need PC repairs based in Bournemouth? Just send me a message using the form!</strong>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>I have experience building PCs also. Negotiable pricing.</strong> </li>
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
