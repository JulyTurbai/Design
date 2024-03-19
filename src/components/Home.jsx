import React from 'react';
import Hero from './hero/Hero';
import About from './about/About';
import Approach from './approach/Approach';
import Projects from './projects/Projects';

const Home = () => {
    return (
        <div className='home'>
            <Hero/>
            <About/>
            <Approach/>
            <Projects/>
        </div>
    );
};

export default Home;