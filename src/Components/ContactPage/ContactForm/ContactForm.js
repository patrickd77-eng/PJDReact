import React from "react";

class ContactForm extends React.Component {
    render() {
        return (
            <div>
                <h1>Contact</h1>
                <div className="card card-outline-secondary">
                    <div className="card-header">
                        <h3 className="mb-0">Let's talk</h3>
                    </div>
                    <div className="card-body">
                        <form className="form" name="contact" method="POST" data-netlify="true" action="https://www.patrickdavis.co.uk/#/contact">
                            <p class="hidden">
                                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                            </p>
                            <fieldset>
                                <label htmlFor="name2" className="mb-0">Name*</label>
                                <div className="row mb-1">
                                    <div className="col-lg-12">
                                        <input type="text" name="name2" id="name2" className="form-control" required />
                                    </div>
                                </div>
                                <label htmlFor="email2" className="mb-0">Email*</label>
                                <div className="row mb-1">
                                    <div className="col-lg-12">
                                        <input type="email" name="email2" id="email2" className="form-control" required />
                                    </div>
                                </div>
                                <label htmlFor="message2" className="mb-0">Message*</label>
                                <div className="row mb-1">
                                    <div className="col-lg-12">
                                        <textarea rows="6" name="message2" id="message2" className="form-control" required></textarea>
                                    </div>
                                </div>
                                <div className="form-row text-center">
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactForm;
