import React from "react";
class ContactForm extends React.Component {
    render() {
        return (
            <div>
                <div className="card card-outline-secondary center">
                    <h1 center>Contact Me</h1>
                    <div className="card-header center">
                        <form action="https://formspree.io/hello@patrickdavis.co.uk" method="POST">
                            <div class="mx-auto form-group col-lg-6">
                                <label class="form-control-label" for="form-group-input">Name*</label>
                                <input required type="text" class="form-control" id="form-group-input" name="Name" />
                            </div>
                            <div class="form-group mx-auto col-lg-6 ">
                                <label class="form-control-label" for="form-group-input">Email*</label>
                                <input required type="email" class="form-control" id="form-group-input" name="Email" />
                            </div>
                            <div class="form-group col-lg-12">
                                <label class="form-control-label" for="form-group-input">Message*</label>
                                <textarea required class="form-control" id="form-group-input" name="Message" rows="6"></textarea>
                            </div>
                            <div>
                                <input className="btn btn-primary btn-large" value="Submit" type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactForm;
