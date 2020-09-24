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
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default sectionBook;