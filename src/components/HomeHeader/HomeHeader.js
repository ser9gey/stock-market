import logo from "../../images/home/1.png";
import { Link } from 'react-router-dom';
import { useState } from "react";
import classnames from 'classnames';

const HomeHeader = () => {

    const [firstActiveBTn, setFirstActiveBTn] = useState(false);
    const [secondActiveBTn, setSecondActiveBTn] = useState(false);
    const [activeBurger, setActiveBurger] = useState(false);

    const activeBtn = (e) => {
        if(e.target.dataset.btn === 'users') {
            setFirstActiveBTn(true)
            setSecondActiveBTn(false)
        } else {
            setFirstActiveBTn(false)
            setSecondActiveBTn(true)
        }
    }

    const burger = () => {
        setActiveBurger(!activeBurger)
    }

    return (
        <div className={classnames('home-header', {'home-header_active': activeBurger})}>
            <div className="home-header__logo">
                <img className="home-header__images" alt="test" src={logo}></img>
            </div>
            <div className={classnames('home-header__btns', {'home-header__btns_active': activeBurger})}>
                <Link to="/users" data-btn="users" className={classnames('home-header__btn', {'home-header__btn_active': firstActiveBTn})} onClick={activeBtn}>For Users</Link>
                <Link to="/company" data-btn="company" className={classnames('home-header__btn', {'home-header__btn_active': secondActiveBTn})} onClick={activeBtn}>For Company</Link>
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