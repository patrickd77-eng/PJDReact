import React from "react";
import CV from "../Introduction/PJDCV2019.pdf";
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
                        <div className="row text-center mx-auto">
                            <div className="col-lg-6">
                                <h2>Experience and education</h2>
                            </div>

                            <div className="col-lg-6">
                                <a title="Patrick Davis CV" target="_blank" rel="noopener noreferrer" href={CV} >
                                    <i className="icon grow icon-extralarge fas fa-file-download" />
                                    <p className="mt-2"> <strong>Download My CV for more information</strong></p> </a>
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
                                                        <strong>SSL, DNS settings, APIs, Use of dev tools, server error codes, MVC, Windows Server, Some Linux and MacOS.</strong>
                                                        <span className="badge badge-primary badge-pill"></span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>Python</strong>
                                                        <span className="badge badge-primary badge-pill">Basic, Self-Taught</span>
                                                    </li>
                                                    <p class="mx-auto mt-3">Frameworks/Libraries/CMS</p>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>.NET and .NET Core</strong>
                                                        <span className="badge badge-primary badge-pill">Worked With, Self-Taught</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>Umbraco 7 & 8</strong>
                                                        <span className="badge badge-primary badge-pill">Worked With, Self-Taught</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>Sitecore</strong>
                                                        <span className="badge badge-primary badge-pill">Used</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <strong>React</strong>
                                                        <span className="badge badge-primary badge-pill">Learning/Basic</span>
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
            </div >
        );
    }
}

export default About;
