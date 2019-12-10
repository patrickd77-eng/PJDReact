import React from "react";
import Code from "../Media/Code.jpg"

class Banner extends React.Component {
    render() {
        return (
            <section id="banner">
                <div className="inner">
                    <header className="special">
                        <h1>Patrick J Davis</h1>
                    </header>
                    <p>Junior Developer</p>
                </div>
                <img
                    alt="Code going across screen"
                    src={Code}
                ></img>
            </section>
        );
    }
}

export default Banner;
