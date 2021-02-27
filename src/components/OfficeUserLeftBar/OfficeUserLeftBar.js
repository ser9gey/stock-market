import { Fragment } from 'react';
import user from '../../images/officeUser/user.jpg';

const OfficeUserLeftBar = () => {
    return (
        <Fragment>
            <div className="office-profile__header">
                <div className="office-profile__header-logo">
                    <img className="office-profile__header-ava" src={user} alt="user" />
                </div>
                <div className="office-profile__header-btns">
                    <button className="office-profile__header-btn">Logout</button>
                    <button className="office-profile__header-btn">Edit</button>
                </div>
            </div>
            <div className="office-profile__content">
                <p className="office-profile__content-info">Name: </p>
                <p className="office-profile__content-info">Surname: </p>
                <p className="office-profile__content-info">Profession: </p>
                <p className="office-profile__content-info">Skills: </p>
                <p className="office-profile__content-info">Skills Level: </p>
            </div>
        </Fragment>
    )
}

export default OfficeUserLeftBar;