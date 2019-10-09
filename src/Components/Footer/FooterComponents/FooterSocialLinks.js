
import React from "react";
import { NavLink } from "react-router-dom";


class FooterSocialLinks extends React.Component {
    render() {
        return (
        <div className="container">
            <div>
                <a title="My GitHub" href="https://github.com/patrickd77-eng/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github" aria-hidden="true" />
                </a>
            </div>
            <div>
                <a title="My LinkedIn" href="https://www.linkedin.com/in/pdavis97/" target="_blank" rel="noopener noreferrer">
                    <i className="fab  fa-linkedin" aria-hidden="true" />
                </a>
            </div>
            <div>
                <a title="My Degree" href="https://www.bournemouth.ac.uk/study/courses/bsc-hons-business-information-technology" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-user-graduate" aria-hidden="true" />
                </a>
            </div>
        </div>
        );
    }
}

export default FooterSocialLinks;
