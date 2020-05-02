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
        </section>
      </div>
    );
  }
}

export default Contact;
