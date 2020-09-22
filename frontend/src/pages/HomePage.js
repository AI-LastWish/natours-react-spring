import React from 'react';
import Header from '../components/layout/Header';
import SectionAbout from '../components/sections/section-about';

function HomePage(props) {
    return (
        <div className="HomePage">
            <Header />
            <SectionAbout />
        </div>
    )
}

export default HomePage;