import React from 'react';
import {useNavigate} from "react-router-dom";
import Logo from "Assets/img/logo.svg";
import {nanoid} from "nanoid";

const Header = () => {
    const navigate = useNavigate();

    const navPages = [
        {
            label: 'Popular movies',
            href: '/movies/popular',
            key: nanoid(),
        },
        {
            label: 'Popular TV',
            href: '/shows/popular',
            key: nanoid(),
        },
        {
            label: 'People',
            href: '/people',
            key: nanoid(),
        }];


    return (
        <header>
            <div onClick={() => navigate('/')}>
                <img src={Logo} alt='logo' width="125px" height="110px"/>
            </div>

            <nav>
                {navPages.map((page, i) => {
                    return (
                        <div key={page.key}>
                            {page.label}
                        </div>
                    )
                })}

            </nav>


        </header>
    );
};

export default Header;
