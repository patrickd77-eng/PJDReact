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
                        {/* <form className="form" action="#" name="contact_form" netlify method="POST" encType="application/x-www-form-urlencoded">
                            <p class="hidden">
                                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                            </p>
                            <fieldset>
                                <label htmlFor="user_name" className="mb-0">Name*</label>
                                <div className="row mb-1">
                                    <div className="col-lg-12">
                                        <input type="text" name="user_name" id="user_name" className="form-control" required />
                                    </div>
                                </div>
                                <label htmlFor="user_email" className="mb-0">Email*</label>
                                <div className="row mb-1">
                                    <div className="col-lg-12">
                                        <input type="email" name="user_email" id="user_email" className="form-control" required />
                                    </div>
                                </div>
                                <label htmlFor="user_message" className="mb-0">Message*</label>
                                <div className="row mb-1">
                                    <div className="col-lg-12">
                                        <textarea rows="6" name="user_message" id="user_message" className="form-control" required></textarea>
                                    </div>
                                </div>
                                <div className="form-row text-center">
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form> */}
                        <form name="contact" method="POST" data-netlify="true">
                            <p>
                                <label>Your Name: <input type="text" name="name" /></label>
                            </p>
                            <p>
                                <label>Your Email: <input type="email" name="email" /></label>
                            </p>
                            <p>
                                <label>Your Role: <select name="role[]" multiple>
                                    <option value="leader">Leader</option>
                                    <option value="follower">Follower</option>
                                </select></label>
                            </p>
                            <p>
                                <label>Message: <textarea name="message"></textarea></label>
                            </p>
                            <p>
                                <button type="submit">Send</button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactForm;
