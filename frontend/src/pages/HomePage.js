import React from 'react';
import Header from '../components/layout/Header';
import SectionAbout from '../components/sections/section-about';
import SectionFeatures from '../components/sections/section-features';
import SectionTours from '../components/sections/section-tours';
import SectionStories from '../components/sections/section-stories';
import SectionBook from '../components/sections/section-book';

function HomePage(props) {
    return (
        <div className="HomePage">
            <Header />
            <SectionAbout />
            <SectionFeatures />
            <SectionTours />
            <SectionStories />
            <SectionBook />
        </div>
    )
}

export default HomePage;