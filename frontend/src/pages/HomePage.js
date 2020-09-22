import React from 'react';
import Header from '../components/layout/Header';
import SectionAbout from '../components/sections/section-about';
import SectionFeatures from '../components/sections/section-features';
import SectionTours from '../components/sections/section-tours';

function HomePage(props) {
    return (
        <div className="HomePage">
            <Header />
            <SectionAbout />
            <SectionFeatures />
            <SectionTours />
        </div>
    )
}

export default HomePage;