import React from 'react';
import '../../scss/main.scss';

const sectionBook = props => {
    return (
        <section className="section-book">
            <div className="row">
                <div className="book">
                    <div className="book__form">
                        <form action="#" className="form">
                            <div className="u-margin-bottom-medium">
                                <h2 className="heading-secondary">
                                    Start booking now
                                </h2>
                            </div>

                            <div className="form__group">
                                <input type="text" className="form__input" placeholder="Full Name" id="form__input--name" required />
                                <label htmlFor="form__input--name" className="form__label">Full name</label>
                            </div>

                            <div className="form__group">
                                <input type="email" className="form__input" placeholder="Email address" id="form__input--email" required />
                                <label htmlFor="form__input--email" className="form__label">Email address</label>
                            </div>

                            <div className="form__group">
                                <div className="form__radio-group">
                                    <input type="radio" className="form__radio-input" id="form__radio-input--small"
                                        name="form__radio-input--size" />
                                    <label htmlFor="form__radio-input--small" className="form__radio-label">
                                        <span className="form__radio-button"></span>
                                        Small tour group
                                    </label>
                                </div>
                                <div className="form__radio-group">
                                    <input type="radio" className="form__radio-input" id="form__radio-input--large"
                                        name="form__radio-input--size" />
                                    <label htmlFor="form__radio-input--large" className="form__radio-label">
                                        <span className="form__radio-button"></span>
                                        Large tour group
                                    </label>
                                </div>
                            </div>

                            <div className="form__group">
                                <button className="btn btn--green">Next step &rarr;</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default sectionBook;