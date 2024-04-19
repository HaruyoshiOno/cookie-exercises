import React from 'react';
import { Link } from 'react-router-dom';


export const Header = () => {

    const navList = [
        {
            id: 1,
            src: './src/assets/images/top.png',
        },
        {
            id: 2,
            src: './src/assets/images/shop.png',
        },
        {
            id: 3,
            src: './src/assets/images/info.png',
        },
        {
            id: 4,
            src: './src/assets/images/news.png',
        },
    ];

    return (
        <>
        <header class="header">
            <h1 className="header-logo"><img src="./src/assets/images/logo.png" alt="" /></h1>
            <nav className="header-nav">
                <ul className="header-list">
                    {navList.map((nav) => (
                        <li className="header-item"><img src={nav.src} alt="" /></li>
                    ))}
                </ul>
            </nav>
            
                <ul className="header-box">
                    <li className="header-icon"><img src="./src/assets/images/account.png" alt="" /></li>
                    <li className="header-icon"><Link to="/Cart"><img src="./src/assets/images/cart.png" alt="" /></Link></li>
                </ul>

        </header>
           
        </>
    );
};