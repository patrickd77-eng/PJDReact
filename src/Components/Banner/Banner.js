import React from "react";
import Code from "../Media/Code.jpg"

class Banner extends React.Component {
    render() {
        return (
            <section id="banner">
                <div className="inner">
                    <header className="special">
                        <h2>Patrick J Davis</h2>
                    </header>
                    <p>Web Developer Undergraduate</p>
                </div>
                <img
                    alt="code"
                    src={Code}
                ></img>
            </section>
        );
    }
}

export default Banner;
