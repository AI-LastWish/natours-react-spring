import React from 'react';
import '../../scss/main.scss';

const sectionAbout = props => {
    return (
        <section className="section-about">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Exciting tours for adventurous people
                </h2>
            </div>

            <div className="row">
                <div className="col-1-of-2">
                    <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>

                    <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quo dolore, inventore corrupti minus dicta!
                    </p>

                    <a href="#" className="btn-text">Learn more &rarr;</a>
                </div>
                <div className="col-1-of-2">
                    <div className="composition">
                        <img src="/img/nat-1-large.jpg" alt="Photo 1" className="composition__photo composition__photo--pic1" />
                        <img src="/img/nat-2-large.jpg" alt="Photo 2" className="composition__photo composition__photo--pic2" />
                        <img src="/img/nat-3-large.jpg" alt="Photo 3" className="composition__photo composition__photo--pic3" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default sectionAbout;