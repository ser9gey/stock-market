import { Fragment, useState } from 'react';
import user from '../../images/officeUser/user.jpg';
import { useHistory } from 'react-router-dom';
import {auth, dataBase} from '../../firebase';
import EditUser from '../EditUser/EditUser';
import { useDispatch } from 'react-redux';
import { MyContext } from '../../index';
import { useContext } from 'react';
import addUser from '../../actions/addUser';

const OfficeUserLeftBar = () => {

    const [stateEditBtn, showEditForm] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();
    const [profile, changeProfile] = useState({name: "", surname: "", proff: "", skills: "", level: ""});
    const value = useContext(MyContext).getState();

    const onChangeUserProfile = (e) => {
        changeProfile({...profile, [e.target.name]: e.target.value});
    }

    const sendProfileOnDataBase = async (e) => {

        await dataBase.ref('profiles/' + value.addUser.uid).update({
            name: profile.name,
            surname: profile.surname,
            profession: profile.proff,
            skills: profile.skills,
            level: profile.level,
        })

        await dataBase.ref('profiles/' + value.addUser.uid).once("value")
        .then( snapshot =>  {
            dispatch(addUser(snapshot.val()))
        })
        
        showEditForm(!e.target.dataset.state === "close");
    }
        
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
                <p className="office-profile__content-info">Name: {value.addUser.name} </p>
                <p className="office-profile__content-info">Surname: {value.addUser.surname} </p>
                <p className="office-profile__content-info">Profession: {value.addUser.profession} </p>
                <p className="office-profile__content-info">Skills: {value.addUser.skills} </p>
                <p className="office-profile__content-info">Skills Level: {value.addUser.level} </p>
            </div>
            <EditUser   
                onChangeUserProfile={onChangeUserProfile}
                profile={profile} 
                stateEditBtn={stateEditBtn}
                sendProfileOnDataBase={sendProfileOnDataBase} />
        </Fragment>
    )
}

export default OfficeUserLeftBar;