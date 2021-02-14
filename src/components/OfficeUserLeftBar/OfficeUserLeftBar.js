import { Fragment, useState } from 'react';
import user from '../../images/officeUser/user.jpg';
import { useHistory } from 'react-router-dom';
import {auth} from '../../firebase';
import EditUser from '../EditUser/EditUser';

const OfficeUserLeftBar = () => {

    const [profile, changeProfile] = useState({name: "", surname: ""});
    console.log(profile);

    const onChangeUserProfile = (e) => {
        const target = e.target;
        const value = target.name === "name" ? target.value : target.name === "surname" ? target.value 
        : target.name === "proff" ? target.value : target.name === "skull" ? target.value : target.value;
        const name = e.target.name;
        changeProfile(profile[name] = value);
        //Нужно доделать
    }


    const [btn, showEditForm] = useState(false);

    const history = useHistory();

    const userLogout = () => {
        auth.signOut().then(() => {
            history.push("/users");
        }).catch((error) => {
            console.log("Error");
        });
    }

    const userEditProfile = (e) => {
        showEditForm(e.target.dataset.state === "open");
    }

    return (
        <Fragment>
            <div className="office-profile__header">
                <div className="office-profile__header-logo">
                    <img className="office-profile__header-ava" src={user} alt="user" />
                </div>
                <div className="office-profile__header-btns">
                    <button className="office-profile__header-btn" onClick={userLogout}>Logout</button>
                    <button data-state="open" className="office-profile__header-btn" onClick={userEditProfile}>Edit</button>
                </div>
            </div>
            <div className="office-profile__content">
                <p className="office-profile__content-info">Name: {profile.name} </p>
                <p className="office-profile__content-info">Surname: {profile.surname} </p>
                <p className="office-profile__content-info">Profession:  </p>
                <p className="office-profile__content-info">Skills:  </p>
                <p className="office-profile__content-info">Skills Level:  </p>
            </div>
            <EditUser onChangeUserProfile={onChangeUserProfile} profile={profile} btn={btn} userEditProfile={userEditProfile} />
        </Fragment>
    )
}

export default OfficeUserLeftBar;