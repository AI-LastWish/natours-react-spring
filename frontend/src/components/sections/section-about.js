import React from 'react';
import '../../scss/main.scss';

const sectionAbout = props => {
    return (
        <section className="section-about">
            <div className="u-center-text u-margin-bottom-lg">
                <h2 className="heading-secondary">
                    Exciting tours for adventurous people
                </h2>
            </div>

            <div class="row">
                <div class="col-1-of-2">
                    Text content
                </div>
                <div class="col-1-of-2">
                    Image composition
                </div>
            </div>
        </section>
    )
}

export default sectionAbout;