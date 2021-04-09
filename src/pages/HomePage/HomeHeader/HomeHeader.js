import { NavLink } from 'react-router-dom';
import { useState } from "react";
import classnames from 'classnames';
import {logo} from '../HomeHeader';
import './homeHeader.scss';

const HomeHeader = () => {

    const [activeBurger, setActiveBurger] = useState(false);

    const burger = () => setActiveBurger(!activeBurger);

    return (
        <div className={classnames('home-header', {'home-header_active': activeBurger})}>
            <div className="home-header__logo">
                <img className="home-header__images" alt="test" src={logo}></img>
            </div>
            <div className={classnames('home-header__btns', {'home-header__btns_active': activeBurger})}>
                <NavLink to="/users" activeClassName='home-header__btn_active' className='home-header__btn' >For Users</NavLink>
                <NavLink to="/company" activeClassName='home-header__btn_active' className='home-header__btn' >For Company</NavLink>
            </div>
            <div className="home-header__burger" onClick={burger}>
                <div className="home-header__burger-line"></div>
                <div className="home-header__burger-line"></div>
                <div className="home-header__burger-line"></div>
            </div>
        </div>
    )
}

export default HomeHeader;