import React from 'react';
import '../../scss/main.scss';

const navigation = props => {
    return (
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
            <label htmlFor="navi-toggle" className="navigation__button">MENU</label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>01</span>About Natours</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>02</span>Popular tours</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>03</span>Stories</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>04</span>Book now</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>05</span>Login</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>06</span>Register</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default navigation;