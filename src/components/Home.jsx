import React from 'react';
import Hero from './hero/Hero';
import About from './about/About';
import Approach from './approach/Approach';

const Home = () => {
    return (
        <div className='home'>
            <Hero/>
            <About/>
            <Approach/>
        </div>
    );
};

export default Home;