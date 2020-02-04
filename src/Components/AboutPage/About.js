import React from "react";
import CV from "../Introduction/PJDCV2019.pdf";
import CodeMac from "../Media/CodeMac.jpg";
import { Helmet } from "react-helmet";

class About extends React.Component {
    render() {
        function changeClass() {
            var skillsToggler = document.getElementById("skillsToggler");
            if (skillsToggler.classList.value.includes("fa-chevron-circle-down")) {
                skillsToggler.classList.remove("fa-chevron-circle-down");
                skillsToggler.classList.add("fa-chevron-circle-up");
            }
            else {
                skillsToggler.classList.remove("fa-chevron-circle-up");
                skillsToggler.classList.add("fa-chevron-circle-down");
            }
        }
        return (
            <div>
                <Helmet>
                    <title>About Me | PJD</title>
                </Helmet>
                <section className="wrapper">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col mb-4">
                                <h2 className="center">Working Experience and Education History</h2>
                                <div className="card">
                                    <div className="mx-5 card-body">
                                        <h5 className="mt-3 card-title">1yr+ Junior Industrial Experience</h5>
                                        <p className="card-text mx-5"> I have experience working with front end and back end technologies, scrum agile development, client proposals, software maintenance, planning and more.</p>
                                        <h5 className="card-title">A BSc in a computer science pathway</h5>
                                        <p className="card-text mx-5">My BSc in Business I.T. teaches many disciplines and is very relevant to modern development and infrastructure.</p>
                                        <p className="card-text mx-5">It is not just about development, but also the processes around developing, storing data and infrastructure. For example, cloud computing and business resilience.</p>
                                    </div>
                                    <div className="card-body">
                                        <div className="mx-auto mt-3 mb-3 center">
                                            <a title="Patrick Davis CV" target="_blank" rel="noopener noreferrer" href={CV} >
                                                <i className="icon grow icon-extralarge fas fa-file-download" />
                                                <p className="mt-2"> <strong>Download My CV for more information</strong></p> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="accordion" id="accordion">
                                    <h2 className="center">Skills and Tools</h2>
                                    <div className="card align-items-center">
                                        <div className="card-header " id="heading">
                                            <button onClick={changeClass} className="btn btn-link btn-lg " type="button" data-toggle="collapse" data-target="#collapse" aria-expanded="true" aria-controls="collapse">
                                                <span id="skillsToggler" className="icon icon-large fas fa-chevron-circle-down" aria-hidden="true"> </span>
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
                                                        <strong>JavaScript and jQuery</strong>
                                                        <span className="badge badge-primary badge-pill">Worked With, Self-Taught</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>HTML & CSS (Bootstrap 4)</strong>
                                                        <span className="badge badge-primary badge-pill">Worked With, Self-Taught</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>HTTP, SSL Certificates, Server Error Codes, APIs, Dev Tools, Common Website Faults, Deployment Patterns.</strong>
                                                        <span className="badge badge-primary badge-pill"></span>
                                                    </li>
                                                    <p class="mx-auto mt-3">Frameworks/Libraries/CMS</p>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>.NET and learning .NET Core</strong>
                                                        <span className="badge badge-primary badge-pill">Worked With, Self-Taught, Learning Core</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>Umbraco 7 & 8</strong>
                                                        <span className="badge badge-primary badge-pill">Worked With, Self-Taught</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>React</strong>
                                                        <span className="badge badge-primary badge-pill">Learning</span>
                                                    </li>
                                                    <p class="mx-auto mt-3 text-center">Other Key Tools & Familliarity/Experience</p>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>Git, Firebase, Google App Engine, NPM, Nuget, RESTful APIs,
                                                        VS Code, MongoDB, Sitecore, Visual Studio, SQL & SMSS, Postman, Papercut,
                                                        Familliar with Linux & Nginx, Windows Server, IIS, Basic Python, Django</strong>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <h2 className="center">Udemy Courses Studied/Wishlist</h2>
                                    <div className="center"><p>My learning didn't stop past my placement year or at university.</p>
                                        <p>I follow Udemy Courses in my spare time also, some examples...</p></div>
                                    <ul className="list-group list-group-horizontal-sm">
                                        <li className="list-group-item">The Complete Web Developer in 2020
                                            By Andrei Neagoie
                                        </li>
                                        <li className="list-group-item">The Complete Junior to Senior Web Developer Roadmap (2020)
                                             By Andrei Neagoie
                                       </li>
                                        <li className="list-group-item">Complete ASP NET MVC Web Development
                                             By Brett Hargreaves
                                      </li>
                                        <li className="list-group-item">The Complete C# programming Course
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
                                                    Originally, I'd designed my site using .NET 4.7 and Umbraco 8.</p>
                                                <p className="card-text mx-3">I realised I didn't need SQL and I don't need all the extra dependencies.</p>
                                                <p className="card-text mx-3">I then simply used React with Bootstrap 4, serving the site statically from my Linux server.</p>
                                                <p className="card-text mx-3"><small className="text-muted">October 2019</small></p>
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
