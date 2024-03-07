import React from 'react';
import './Hero.scss';

const Hero = () => {
    return (
        <div className='hero'>
            <div className="block">
                <div className="container">
                    <div className="main-block">
                        <div className="hero main">
                            <div className="main__title">
                                <h1 className='main__title-mad'>The mad hatter*</h1>
                                <h2 className='main__title-ui'>ui/ux design - 001</h2>
                            </div>
                            <div className="decor">
                                <div className="decor__circle"></div>
                            </div>
                            <div className="main__descr">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  andi tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo assei consequat. 
                                    Duis aute irure dolor in reprehenderit in voluptate velit essei cillus dolore eu fugiat nulla pariatur. 
                                    Excepteur sint occaecat cupidatat non proiden sunt in culpa qui officia deserunt mollit anim id est laborum. 
                                    Sed ut  problem i perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem
                                </p>
                            </div>
                        </div>
                        <div className="design">
                            <div className="design__data">2024</div>
                            <img className='design__img' src="Design/img/Main-img.png" alt="" />
                            <div className="design__text">
                                <p>featured ui/ux projects</p>
                            </div>
                            <div className="design__data-month">
                                June 2024
                            </div>
                        </div>
                        <img className='arrow' src="Design/img/icons/Arrow.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;