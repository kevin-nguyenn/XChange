import React from 'react';
import '../Stylesheets/Header.css';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/Help';

function Header() {
    return(
        <div className="header">
            <div className="header__left">
                <Avatar 
                    className="header__avatar"
                    alt="Kevin Nguyen"
                    src=""
                />

                <AccessTimeIcon />
            </div>
            <div className="header__search">
                <SearchIcon />

                <input placeholder="Search Clever Programer"/>
            </div>
            <div className="header__right">
                <HelpOutlineIcon />
            </div>
        </div>
    );
}

export default Header;