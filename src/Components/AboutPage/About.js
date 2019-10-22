import React from "react";
import CV from "../Introduction/PJDCV2019.pdf";
import CodeMac from "../Media/CodeMac.jpg";

class About extends React.Component {
    render() {
        return (
            <div>
                <section className="wrapper">

                    <div className="container">
                        <div className="row text-center">
                            <div className="col-lg-4 mb-4 ">
                                <h2 className="center">Relevant Working Experience</h2>
                                <div className="card ">
                                    <div className="card-body ">
                                        <h5 className="card-title">Over a year in the Web Dev industry</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Please read my CV for more work history.</h6>
                                        <p className="card-text"> I have experience working with front end and back end technologies, scrum agile development, client proposals, software maintenance, planning and more.</p>
                                        <div className="mx-auto center">
                                            <a title="Patrick Davis CV" target="_blank" rel="noopener noreferrer" href={CV} >
                                                <i className="icon icon-large fas fa-file-download" />
                                                <strong> Download My CV</strong>
                                            </a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 mt-2">
                                <h2 className="center">Education History</h2>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Bournemouth University</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">BSc, Comp Science (Business Information Technology)</h6>
                                        <p className="card-text">Undergraduate. Course contains elements of programming, systems & infrastructure, data and business.
                                     Predicted 2/1.</p>
                                        <a title="My Degree" href="https://www.bournemouth.ac.uk/study/courses/bsc-hons-business-information-technology" rel="noopener noreferrer" target="_blank">
                                            <i class="icon icon-large fas fa-user-graduate" aria-hidden="true" />
                                            <strong> Course Information</strong>
                                        </a>
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
                            <div className="col">
                                <div className="accordion" id="accordion">
                                    <div className="card align-items-center">
                                        <div className="card-header " id="heading">
                                            <button className="btn btn-link btn-lg " type="button" data-toggle="collapse" data-target="#collapse" aria-expanded="true" aria-controls="collapse">
                                                Relevant Skills and Tools
                                               <br />
                                                <span className="icon icon-large fas fa-chevron-circle-down" aria-hidden="true"> </span>
                                            </button>
                                        </div>
                                        <div id="collapse" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="card-body">
                                                <ul className="list-group">
                                                    <p class="mx-auto">Languages/Basics</p>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>C#</strong>
                                                        <span className="badge badge-primary badge-pill">Worked With, Self-Taught</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>JavaScript</strong>
                                                        <span className="badge badge-primary badge-pill">Worked With, Self-Taught</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>HTML & CSS (Bootsrap)</strong>
                                                        <span className="badge badge-primary badge-pill">Worked With, Self-Taught</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>HTTP Codes, Server Codes, Knowledge of common faults & windows/linux deployment</strong>
                                                        <span className="badge badge-primary badge-pill">Worked With, Self-Taught</span>
                                                    </li>
                                                    <p class="mx-auto mt-3">Frameworks/Libraries/CMS</p>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>.NET and Core</strong>
                                                        <span className="badge badge-primary badge-pill">Worked With, Self-Taught, Learning Core</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>Umbraco 7 & 8</strong>
                                                        <span className="badge badge-primary badge-pill">Worked With, Self-Taught</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>MERN (Mongo, Express, React, Node) Stack or using React + Firebase </strong>
                                                        <span className="badge badge-primary badge-pill">Self-Taught, Learning</span>
                                                    </li>
                                                    <p class="mx-auto mt-3 text-center">Key Tools (latest versions), Environments, Serverless Environments, Databases or Software</p>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>Git, Firebase, Google App Engine, NPM, Nuget, RESTful APIs, VS Code, MongoDB (Atlas/Local), Visual Studio, SQL & SMSS, Postman, Papercut, Familliar with Linux servers, Windows Server, IIS</strong>
                                                    </li>
                                                    <p class="mx-auto mt-3">Other Familliarities</p>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>
                                                            <ul>
                                                                <li>Python</li>
                                                                <li>Flask</li>
                                                                <li>Django</li>
                                                                <li>Basic Data Science (SciKit etc)</li>
                                                            </ul>
                                                        </strong>
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
                                <div className="card mb-3" >
                                    <div className="row no-gutters">
                                        <div className="col-md-6">
                                            <img draggable="false" src={CodeMac} className="card-img" alt="This Website" />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card-body">
                                                <h5 className="card-title mx-3">This Website, built with React</h5>
                                                <p className="card-text mx-3">
                                                    Originally, I'd designed my site using .NET 4.7 and Umbraco 8. At the time this felt great, but then I thought...</p>
                                                <p className="card-text mx-3">I don't need a SQL database for my site, I don't need all the extra frameworks... So why not simplify everything?</p>
                                                <p className="card-text mx-3">I then used React with Bootstrap 4. I took design elements from my site but wrote it entirely from scratch as a SPA.</p>
                                                <p className="card-text mx-3"><small className="text-muted">Released October 2019</small></p>
                                            </div>
                                        </div>
                                    </div>
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
