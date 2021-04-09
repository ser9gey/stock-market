import { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {auth, dataBase} from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import {EditFormUser, user, addUser} from '../OfficeUserLeftBar';

const OfficeUserLeftBar = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile);
    const [editFormVisible, showEditForm] = useState(false);
    const [disableBtn, setDisableBtn] = useState(false);

    const sendProfileOnDataBase = async (values) => {

        setDisableBtn(true);
        
        await dataBase.ref('profiles/' + profile.uid).update({
            name: values.name,
            surname: values.surname,
            profession: values.proff,
            skills: values.skills,
            level: values.level,
        })

        await dataBase.ref('profiles/' + profile.uid).once("value")
        .then( snapshot =>  dispatch(addUser(snapshot.val())))

        showEditForm(false);
    }

    const userLogout = () => {
        auth.signOut()
            .then(() => history.push("/users"))
            .catch((error) => console.log(error));
    }

    const userEditProfile = (e) => showEditForm(true)

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
                <p className="office-profile__content-info">Profession: {profile.profession} </p>
                <p className="office-profile__content-info">Skills: {profile.skills} </p>
                <p className="office-profile__content-info">Skills Level: {profile.level} </p>
            </div>
            <EditFormUser
                profile={profile}
                onSubmit={sendProfileOnDataBase}
                visible={editFormVisible}
                disableBtn={disableBtn}
            />
        </Fragment>
    )
}

export default OfficeUserLeftBar;