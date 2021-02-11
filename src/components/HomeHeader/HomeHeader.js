import logo from "../../images/home/1.png";
import { Link } from 'react-router-dom';

const HomeHeader = () => {
    return (
        <div className="home-header">
            <div className="home-header__logo">
                <img className="home-header__images" alt="test" src={logo}></img>
            </div>
            <div className="home-header__btns">
                <Link to="/users" data-btn="users" className="home-header__btn">For Users</Link>
                <Link to="/company" data-btn="company" className="home-header__btn">For Company</Link>
            </div>
        </div>
    )
}

export default HomeHeader;