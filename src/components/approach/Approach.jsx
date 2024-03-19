import React from 'react';
import './Approach.scss';

const Approach = () => {
    return (
        <div className='approach'>
            <div className="container">
                <div className="block">
                    <h3><span class=" bold">Design</span> Approach</h3>
                    <div className="options">
                        <div className="option">
                            <p className='option__number'>001</p>
                            <p className='option__name'>intentional research</p>
                            <div className="decor">
                                <div className="decor__circle"></div>
                            </div>
                            <p className='option__descr'>
                                The focus is in creating clear, user friendly, and aesthetically pleasing. 
                                It is given importance to come up with a simple and clear flow of design for the users. 
                                The Mad Hatter* - creating intentional and creative digital solutions for the future. 
                            </p>
                        </div>
                        <div className="option">
                            <p className='option__number'>002</p>
                            <p className='option__name'>digital solutions</p>
                            <div className="decor">
                                <div className="decor__circle"></div>
                            </div>
                            <p className='option__descr'>
                                The focus is in creating clear, user friendly, and aesthetically pleasing. It is given importance to come 
                                up with a simple and clear flow of design for the users. The Mad Hatter* - creating intentional and creative 
                                digital solutions for the future. 
                            </p>
                        </div>
                    </div>
                    <div className="slogan">
                        <p>Collaborate. Create. Innovate<br/><span class="grey">Collaborate. Create. Innovate</span></p>
                    </div>
                </div>
            </div>
            <div className="decoration">
                <img src="Design/img/Shape2.png" alt="" />
            </div>
        </div>
    );
};

export default Approach;