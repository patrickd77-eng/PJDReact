import React from "react";

class About extends React.Component {
    render() {
        return (
            <div>
                <section className="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mb-4">
                                <h2>Relevant Experience</h2>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Greenwood Campbell</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Web Developer (Placement) | 1 Yr 3 Mo</h6>
                                        <p className="card-text">Mainly .NET, with some front end work.</p>
                                        <p className="card-text">Other experience: IoT/Smart Devices, Chatbots (TypeScript and Firebase), Voice Assistants.</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">LV=</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Temporary Digital Content Assistant | 3 mo</h6>
                                        <p className="card-text">Mainly content work using C5 and Sitecore</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-2">
                                <h2>Education</h2>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Bournemouth University</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">BSc, Business Information Technology</h6>
                                        <p className="card-text">Undergraduate. Course contains elements of programming, systems & infrastructure, data and business.
                                     Predicted 2/1.</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">A Levels</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Business, English Literature, Information Technology</h6>
                                        <p className="card-text">  AAA* grades.  DofE Gold Award.  </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col col-xs-12">
                                <div className="accordion" id="accordion">
                                    <div className="card align-items-center">
                                        <div className="card-header " id="heading">

                                            <button className="btn btn-link btn-lg " type="button" data-toggle="collapse" data-target="#collapse" aria-expanded="true" aria-controls="collapse">
                                                Skills / Tools Used
                                               <br />
                                                <span className="fas fa-chevron-circle-down" aria-hidden="true"> </span>
                                            </button>
                                        </div>
                                        <div id="collapse" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="card-body">
                                                <ul className="list-group">
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>C#</strong>
                                                        <span className="badge badge-primary badge-pill">Working Experience</span>
                                                        <span className="badge badge-primary badge-pill">Self Taught</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>.NET</strong>
                                                        <span className="badge badge-primary badge-pill">Working Experience</span>
                                                        <span className="badge badge-primary badge-pill">Self Taught</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>.NET Core</strong>
                                                        <span className="badge badge-primary badge-pill">Self Taught</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>Umbraco 7 or 8</strong>
                                                        <span className="badge badge-primary badge-pill">Working Experience</span>
                                                        <span className="badge badge-primary badge-pill">Self Taught</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>  Python</strong>
                                                        <span className="badge badge-primary badge-pill">Self-Taught</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>Django and Flask</strong>
                                                        <span className="badge badge-primary badge-pill">Self-Taught</span>
                                                        <span className="badge badge-primary badge-pill">University</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>Google App Engine</strong>
                                                        <span className="badge badge-primary badge-pill">University</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>Firebase</strong>
                                                        <span className="badge badge-primary badge-pill">University</span>
                                                        <span className="badge badge-primary badge-pill">Working Experience</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>Java</strong>
                                                        <span className="badge badge-primary badge-pill">University</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>JavaScript</strong>
                                                        <span className="badge badge-primary badge-pill">Self-Taught</span>
                                                        <span className="badge badge-primary badge-pill">Working Experience</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>React and Angular</strong>
                                                        <span className="badge badge-primary badge-pill">Self-Taught</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>HTML & CSS</strong>
                                                        <span className="badge badge-primary badge-pill">Self-Taught</span>
                                                        <span className="badge badge-primary badge-pill">Working Experience</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>Bootstrap 4</strong>
                                                        <span className="badge badge-primary badge-pill">Self-Taught</span>
                                                        <span className="badge badge-primary badge-pill">Working Experience</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>Windows Server (IIS & SQL)</strong>
                                                        <span className="badge badge-primary badge-pill">Self-Taught</span>
                                                        <span className="badge badge-primary badge-pill">Working Experience</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>Git, NPM, Nuget, VS Code, Visual Studio, SMSS, Postman, Papercut</strong>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <h2>Udemy Courses</h2>
                                    <ul className="list-group list-group-horizontal-sm">
                                        <li className="list-group-item">The Complete Web Developer in 2019: Zero to Mastery
                                            By Andrei Neagoie
                                    <i className="far fa-check-circle" />
                                        </li>

                                        <li className="list-group-item">The Complete Junior to Senior Web Developer Roadmap (2019)
                                    By Andrei Neagoie
                                    <i className="far fa-check-circle" />
                                        </li>

                                        <li className="list-group-item">Complete ASP NET MVC Web Development - Newbie to Ninja!
                                    By Brett Hargreaves
                                    <i className="far fa-check-circle" />
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                <section className="wrapper ">
                    <div className="container  mb-4">
                        <div className="col-lg-12">
                            <h2>Other Skills</h2>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Computer Builds and Upgrades</h5>
                                    <p className="card-text"> Computer Builds and Upgrades
                                    Adept at upgrading and building PCs for any requirement. </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Computer, Laptop, Tablet and Smartphone Repairs</h5>
                                    <p className="card-text">
                                        Can overcome stubborn spyware/malware and identify broken/underperforming hardware. </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">IoT Device Experience</h5>
                                    <p className="card-text">
                                        Use/developent with raspberry pi's and smart speakers. </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Transcription & Copywriting</h5>
                                    <p className="card-text">
                                        Adept at content migration etc. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;