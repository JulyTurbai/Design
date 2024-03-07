import React from 'react';
import Header from './header/Header';
import Main from './Main';
import Footer from './footer/Footer';

const Layout = () => {
    return (
        <div className='design'>
            
            <Header/>
            <Main/>
            <Footer/>

        </div>
    );
};

export default Layout;