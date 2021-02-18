import { Fragment, useState } from 'react';
import user from '../../images/officeUser/user.jpg';
import { useHistory } from 'react-router-dom';
import {auth} from '../../firebase';
import EditUser from '../EditUser/EditUser';

import {dataBase} from '../../firebase';

const OfficeUserLeftBar = () => {

    const [profile, changeProfile] = useState({name: "", surname: "", proff: "", skills: "", level: ""});
    console.log(profile);

    const onChangeUserProfile = (e) => {
        const target = e.target;
        const value = target.name === "name" ? target.value : target.name === "surname" ? target.value 
        : target.name === "proff" ? target.value : target.name === "skills" ? target.value : target.value;
        const name = e.target.name;
        changeProfile({...profile, [name]: value});
    }

    const sendProfileOnDataBase = () => {

        dataBase.ref('users/').set({
            name: profile.name,
            surname: profile.surname,
            profession: profile.proff,
            skills: profile.skills,
            level: profile.level,
        })

    }

    let rem = dataBase.ref('users/');
        rem.on("value", (user) => {user.val()});
        console.log(rem)
        

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
                <p className="office-profile__content-info">Name: {rem.name} </p>
                <p className="office-profile__content-info">Surname: {} </p>
                <p className="office-profile__content-info">Profession: {} </p>
                <p className="office-profile__content-info">Skills: {} </p>
                <p className="office-profile__content-info">Skills Level: {} </p>
            </div>
            <EditUser   
                onChangeUserProfile={onChangeUserProfile}
                profile={profile} btn={btn}
                userEditProfile={userEditProfile} 
                sendProfileOnDataBase={sendProfileOnDataBase} />
        </Fragment>
    )
}

export default OfficeUserLeftBar;