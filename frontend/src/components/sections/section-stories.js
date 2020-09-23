import React from 'react';
import '../../scss/main.scss';

const sectionStories = props => {
    return (
        <section className="section-stories">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    We make people genuinely happy
                </h2>
            </div>

            <div className="row">
                <div className="story">
                    <figure className="story__shape">
                        <img src="img/nat-8.jpg" alt="Person on a tour" className="story__img" />
                        <figcaption className="story__caption">Mary Smith</figcaption>
                    </figure>
                    <div className="story__text">
                        <h3 className="heading-tertiary u-margin-bottom-small">I had the best week ever with my family</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi incidunt molestias,
                            consectetur cum deleniti voluptatibus illo iste dolorem atque corrupti vitae a assumenda
                            quod nostrum ullam, laborum aliquid fuga totam?
                        </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="story">
                    <figure className="story__shape">
                        <img src="img/nat-9.jpg" alt="Person on a tour" className="story__img" />
                        <figcaption className="story__caption">Jack Wilson</figcaption>
                    </figure>
                    <div className="story__text">
                        <h3 className="heading-tertiary u-margin-bottom-small">Wow! My life is completely different now</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi incidunt molestias,
                            consectetur cum deleniti voluptatibus illo iste dolorem atque corrupti vitae a assumenda
                            quod nostrum ullam, laborum aliquid fuga totam?
                        </p>
                    </div>
                </div>
            </div>

            <div className="u-center-text u-margin-top-huge">
                <a href="#" className="btn-text">Read all stories &rarr;</a>
            </div>
        </section>
    )
}

export default sectionStories;