import React from 'react';

const HiddenCases = ( { show, handleClickShow }) => {

    return (
        <div className={'hidden-cases none' + (show ? ' block ' : '')}>
            <div className="container">
                <div className="cases">
                    <div className="case case--1">
                        <img className='case__img' src="Design/img/Case1.png" alt="" />
                        <div className="case name">
                            <p className='name__title'>project-005</p>
                            <div className="name__circle"></div>
                        </div>
                        <p className='case__descr'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Magnam quo id sequi beatae ex odit commodi cum, excepturi quibusdam temporibus fuga quidem.
                                Lorem ipsum dolor sit amet consectetur.
                        </p>
                        <div className="date date--1">
                            Oct 2023
                        </div>
                    </div>
                    <div className="case case--2">
                        <img className='case__img' src="Design/img/Case2.png" alt="" />
                        <div className="case name">
                            <p className='name__title'>project-006</p>
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
                            <p className='name__title'>project-007</p>
                            <div className="name__circle"></div>
                        </div>
                            <p className='case__descr'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Magnam quo id sequi beatae ex odit commodi cum, excepturi quibusdam temporibus fuga quidem.
                                Lorem ipsum dolor sit amet consectetur.
                        </p>
                        <div className="date date--3">
                            July 2018
                        </div>
                    </div>
                    <div className="case case--4">
                        <img className='case__img' src="Design/img/Case4.png" alt="" />
                        <div className="case name">
                            <p className='name__title'>project-008</p>
                            <div className="name__circle"></div>
                        </div>
                            <p className='case__descr'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Magnam quo id sequi beatae ex odit commodi cum, excepturi quibusdam temporibus fuga quidem.
                                Lorem ipsum dolor sit amet consectetur.
                        </p>
                        <div className="date date--4">
                            Nov 2021
                        </div>
                    </div>
                </div>
                <div className="more">
                    <img  className='more__vector--up'  src="Design/img/icons/Vector.png" alt=""  onClick={handleClickShow}/>
                    <p className='more__text'>Hide More</p>
                </div>
            </div>
        </div>
    );
};

export default HiddenCases;