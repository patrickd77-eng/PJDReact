import React from "react";
import Obfuscate from 'react-obfuscate';
class ContactForm extends React.Component {
    render() {
        return (
            <div>
                <div className="card card-outline-secondary center">
                    <h1 center>Contact Me</h1>
                    <div className="card-header center">
                        <Obfuscate
                            className="acustom btn btn-primary"
                            email="patrick_davis97@hotmail.co.uk"
                            headers={{
                                subject: 'Question from your website'
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactForm;
