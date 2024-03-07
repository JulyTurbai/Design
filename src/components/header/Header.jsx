import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <div className='header'>
            <div className='container'>
                <div className="block">
                    <div className="main-menu">
                        <div className="identica">
                            <img className='identica__img' src="/Design/img/Logo.png" alt=""/>
                            <div className='identica__name'>The mad hatter*</div>
                        </div>
                        <div className="menu">
                            <ul className="menu__items">
                                <li className="menu__item">home</li>
                                <li className="menu__item">about</li>
                                <li className="menu__item">solutions</li>
                                <li className="menu__item">contact us</li>
                            </ul>
                        </div>
                    </div>
                    <div className="search">
                        <form > 
                            <input type="text" />
                            <img src="Design/img/icons/Search.png" alt="" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;