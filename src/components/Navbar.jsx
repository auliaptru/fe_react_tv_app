import React, { useState } from 'react';
import { FiBell, FiSearch } from 'react-icons/fi';

import './navbar.scss';

const menu = ['movies', 'TV shows', 'documentaries'];

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState('movies');

    const handleClickMenu = (e, menu) => {
        e.preventDefault();
        setActiveMenu(menu);
    };

    return (
        <nav>
            <ul className='nav__menu'>
                {menu.map((menu, i) => (
                    <li
                        key={i}
                        onClick={(e) => handleClickMenu(e, menu)}
                        className={`${activeMenu === menu ? 'active' : ''}`}
                    >
                        <a href={menu}>{menu}</a>
                    </li>
                ))}
            </ul>
            <h1 className='nav__logo'>FOcUsREEL</h1>
            <div className='nav__sign'>
                <FiSearch className='icon' />
                <FiBell className='icon' />
                <button>Sign Up</button>
            </div>
        </nav>
    );
};

export default Navbar;
