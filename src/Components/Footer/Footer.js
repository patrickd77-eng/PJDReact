import React from "react";
import { NavLink } from "react-router-dom";


class Footer extends React.Component {
    render() {
        return (

            <footer id="footer">
                <div className="inner">
                    <div className="content">
                        <section>
                            <div className="row">
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
                                        <NavLink title="Contact Me" to="/contact">
                                            <i className="fas fa-comment" aria-hidden="true" />
                                        </NavLink>
                                    </div>
                                    <div>
                                        <a title="My Degree" href="https://www.bournemouth.ac.uk/study/courses/bsc-hons-business-information-technology" rel="noopener noreferrer" target="_blank">
                                            <i className="fa fa-user-graduate" aria-hidden="true" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                <div className="outer">
                    <div className="copyright">
                        <div>Patrick Jonathan Davis | © | 2019</div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
