import React from 'react';
import './About.scss';

const About = () => {
    return (
        <div className='about'>
            <div className="container">
                <div className="block">
                    <h3 className='title-about'>About</h3>
                    <h3 className='title-company'>the company</h3>
                    <div className="description">
                        <div className="decor">
                            <div className="decor__circle"></div>
                        </div>
                        <div className="description__text">
                            <p className='description__part-one'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  round tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, i quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo and col consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse a cillumi dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non  i proidenti sunt in culpa qui officia deserunt mollit anim id est laborum. 
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque culpa and
                            </p>
                            <p className='description__part-two'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  round tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, i quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo and col consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse a cillumi dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non  i  proidenti sunt in culpa qui officia deserunt mollit anim id est laborum. 
                                Sed ut iperspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque culpa and
                                sit voluptatem accusantium doloremque culpa and proident sunt in culpa suten 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="decoration">
                <img src="Design/img/Shape2.png" alt="" />
            </div>
        </div>
    );
};

export default About;