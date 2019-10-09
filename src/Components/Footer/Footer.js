import React from "react";
import FooterSocialLinks from "./FooterComponents/FooterSocialLinks"
import FooterCopyright from "./FooterComponents/FooterCopyright"


class Footer extends React.Component {
    render() {
        return (

            <footer id="footer">
                <div className="inner">
                    <div className="content">
                        <section>
                            <div className="row">
                                <FooterSocialLinks />
                            </div>
                        </section>
                    </div>
                </div>
                <FooterCopyright />
            </footer>
        );
    }
}

export default Footer;