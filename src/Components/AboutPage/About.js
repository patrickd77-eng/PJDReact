import React from "react";
import CV from "../Introduction/PJDCV2019.pdf"

class About extends React.Component {
    render() {
        return (
            <div>
                <section className="wrapper">
                    <div className="mx-auto center">
                        <a title="Patrick Davis CV" target="_blank" rel="noopener noreferrer" href={CV} >
                            <i className="icon fas fa-file-download" />
                            <p>My 2019 CV</p>
                        </a></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mb-4">
                                <h2 className="center">Relevant Experience</h2>
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
                                        <p className="card-text">Mainly content work using C5 and Sitecore.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-2">
                                <h2 className="center">Education</h2>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Bournemouth University</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">BSc, Comp Science (Business Information Technology)</h6>
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
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="accordion" id="accordion">
                                    <div className="card align-items-center">
                                        <div className="card-header " id="heading">
                                            <button className="btn btn-link btn-lg " type="button" data-toggle="collapse" data-target="#collapse" aria-expanded="true" aria-controls="collapse">
                                                Relevant Skills and Tools
                                               <br />
                                                <span className="fas fa-chevron-circle-down" aria-hidden="true"> </span>
                                            </button>
                                        </div>
                                        <div id="collapse" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="card-body">
                                                <ul className="list-group">
                                                    <p class="mx-auto">Languages/Basics</p>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>C#</strong>
                                                        <span className="badge badge-primary badge-pill">Working Experience</span>
                                                        <span className="badge badge-primary badge-pill">Self-Taught</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>JavaScript</strong>
                                                        <span className="badge badge-primary badge-pill">Self-Taught</span>
                                                        <span className="badge badge-primary badge-pill">Working Experience</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>HTML & CSS (Bootsrap)</strong>
                                                        <span className="badge badge-primary badge-pill">Self-Taught</span>
                                                        <span className="badge badge-primary badge-pill">Working Experience</span>
                                                    </li>
                                                    <p class="mx-auto mt-3">Frameworks/Libraries</p>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>.NET & .NET Core</strong>
                                                        <span className="badge badge-primary badge-pill">Working Experience</span>
                                                        <span className="badge badge-primary badge-pill">Self-Taught</span>
                                                        <span className="badge badge-primary badge-pill">Learning Core</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>Umbraco</strong>
                                                        <span className="badge badge-primary badge-pill">Working Experience</span>
                                                        <span className="badge badge-primary badge-pill">Self-Taught</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>Google App Engine & Firebase</strong>
                                                        <span className="badge badge-primary badge-pill">Self-Taught</span>
                                                        <span className="badge badge-primary badge-pill">University</span>
                                                        <span className="badge badge-primary badge-pill">Working Experience</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>MERN Stack (Mongo, Express, React, Node)</strong>
                                                        <span className="badge badge-primary badge-pill">Learning</span>
                                                    </li>
                                                    <p class="mx-auto mt-3">Key Tools, Environments or Software</p>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>Git, NPM, Nuget, RESTful APIs, VS Code, MongoDB (cloud and local), Visual Studio, SQL & SMSS, Postman, Papercut, Familliar with Linux servers, Window Server, IIS</strong>
                                                    </li>
                                                    <p class="mx-auto mt-3">Other Misc Skills</p>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>Familliar with Python, Flask and Django, as well as some data science libraries like SciKit learn.</strong>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <h2 className="center">Udemy Courses</h2>
                                    <ul className="list-group list-group-vertical-sm">
                                        <li className="list-group-item">The Complete Web Developer in 2019: Zero to Mastery
                                            By Andrei Neagoie
                                        </li>
                                        <li className="list-group-item">The Complete Junior to Senior Web Developer Roadmap (2019)
                                             By Andrei Neagoie
                                       </li>
                                        <li className="list-group-item">Complete ASP NET MVC Web Development - Newbie to Ninja!
                                             By Brett Hargreaves
                                      </li>
                                        <li className="list-group-item">MERN Stack Front to Back
                                               By Traversy Media
                                      </li>
                                    </ul>
                                </div>
                                <div className="mt-5 mb-5">
                                    <h2 className="center">Other Skills</h2>
                                    <ul className="list-group list-group-horizontal-sm">
                                        <li className="list-group-item"><strong>Computer Builds, Upgrades and Repairs</strong>
                                            <p>Adept at upgrading and building PCs for any requirement.</p>
                                        </li>
                                        <li className="list-group-item"><strong>IoT Device Experience</strong>
                                            <p>Use/developent with Raspberry Pi's and smart speakers.</p>
                                        </li>
                                        <li className="list-group-item"><strong>Transcription & Copywriting</strong>
                                            <p>Adept at content migration etc.</p>
                                        </li>
                                    </ul>
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