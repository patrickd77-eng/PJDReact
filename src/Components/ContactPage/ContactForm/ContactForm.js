import React from "react";

class ContactForm extends React.Component {
    render() {
        return (
            <div>
                <div className="card card-outline-secondary center">
                    <h1 center>Contact</h1>
                    <div className="card-header center">
                        <h3 className="mb-0"><a className="btn btn-primary btn-lg" href="mailto:patrick_davis97@hotmail.co.uk?subject=Message From Your Site">Let's talk</a></h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactForm;
