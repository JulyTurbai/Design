import React, { useState } from 'react';
import './Projects.scss';
import HiddenCases from './HiddenCases';

const Projects = () => {

    const [show, setShow] = useState(false);

    const handleClickShow = () => {
        setShow(!show)
      };

    return (
        <div className='projects'>
            <div className="container">
                <div className="block">
                    <h2  className='projects-title'>Our<span className='medium'> projects</span></h2>
                    <div className="cases">
                        <div className="case case--1">
                            <img className='case__img' src="Design/img/Case1.png" alt="" />
                            <div className="case name">
                                <p className='name__title'>project-001</p>
                                <div className="name__circle"></div>
                            </div>
                            <p className='case__descr'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Magnam quo id sequi beatae ex odit commodi cum, excepturi quibusdam temporibus fuga quidem.
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
                            <div className="date date--1">
                                June 2022
                            </div>
                        </div>
                        <div className="case case--2">
                            <img className='case__img' src="Design/img/Case2.png" alt="" />
                            <div className="case name">
                                <p className='name__title'>project-002</p>
                                <div className="name__circle"></div>
                            </div>
                             <p className='case__descr'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Magnam quo id sequi beatae ex odit commodi cum, excepturi quibusdam temporibus fuga quidem.
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
                            <div className="date date--2">
                                May 2019
                            </div>
                        </div>
                        <div className="case case--3">
                            <img className='case__img' src="Design/img/Case3.png" alt="" />
                            <div className="case name">
                                <p className='name__title'>project-003</p>
                                <div className="name__circle"></div>
                            </div>
                                <p className='case__descr'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Magnam quo id sequi beatae ex odit commodi cum, excepturi quibusdam temporibus fuga quidem.
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
                            <div className="date date--3">
                                Sep 2018
                            </div>
                        </div>
                        <div className="case case--4">
                            <img className='case__img' src="Design/img/Case4.png" alt="" />
                            <div className="case name">
                                <p className='name__title'>project-004</p>
                                <div className="name__circle"></div>
                            </div>
                                <p className='case__descr'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Magnam quo id sequi beatae ex odit commodi cum, excepturi quibusdam temporibus fuga quidem.
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
                            <div className="date date--4">
                                June 2020
                            </div>
                        </div>
                    </div>
                    <HiddenCases
                    show={ show }
                    handleClickShow={ handleClickShow }/>
                    <div className={'more'+ (show ? ' none' : '')}>
                        <img  className='more__vector' src="Design/img/icons/Vector.png" alt="" onClick={handleClickShow} />
                        <p className='more__text'>View More</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;