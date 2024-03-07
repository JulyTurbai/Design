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
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ad labore quis ipsa quam similique cupiditate id unde, 
                                    nisi atque accusantium esse consequuntur perferendis, veritatis, perspiciatis nemo veniam nam mollitia.
                                    Cupiditate, facere ad hic debitis ipsa quaerat quos labore cum qui deleniti quasi reiciendis perspiciatis 
                                    voluptate tempore rem reprehenderit eaque odit dicta enim sunt, blanditiis consequatur dolorem, molestiae animi? 
                                    Quas. Laborum impedit perferendis repellat eligendi, iusto amet sapiente rem. Modi quisquam corrupti voluptatibus
                                    perspiciatis explicabo, ipsum qui reiciendis
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