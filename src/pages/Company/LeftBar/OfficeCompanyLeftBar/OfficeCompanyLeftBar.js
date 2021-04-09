import { Fragment, useState } from 'react';
import {auth} from '../../../../core/api/firebase';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {company, EditFormCompany, addUser, AddNewProjectFromCompany, sendedProfileCompany} from '../OfficeCompanyLeftBar';

const OfficeCompanyLeftBar = () => {

    const history = useHistory();
    const profile = useSelector(state => state.profile);
    const dispatch = useDispatch();
    const [editFormVisible, showEditForm] = useState(false);
    const [formCreateProject, showCreateFormProject] = useState(false);

    const companyLogout = () => {
        auth.signOut()
            .then(() => history.push("/company"))
            .catch((error) => console.log(error));
    }

    const companyEditProfile = () => showEditForm(!editFormVisible)

    const sendProfileOnDataBase = async (values) => {
        try {
            await sendedProfileCompany(profile.uid, values.info)
            .then((snapshot) => dispatch(addUser(snapshot.val())))
        } catch (error) {
            console.log(error)
        } finally {
            showEditForm(!editFormVisible);
        }
    }
    
    const createProject = () => showCreateFormProject(true);

    return (
        <Fragment>
            <div className="office-profile__header">
                <div className="office-profile__header-logo">
                    <img className="office-profile__header-ava" src={company} alt="company" />
                </div>
                <div className="office-profile__header-btns">
                    <button className="office-profile__header-btn" onClick={companyLogout}>Logout</button>
                    <button className="office-profile__header-btn" onClick={companyEditProfile}>Edit</button>
                </div>
            </div>
            <div className="office-profile__content">
                <p className="office-profile__content-info">About Us:</p>
                <p className="office-profile__content-info">{profile.info}</p>
                <button className="office-profile__content-btn" onClick={createProject} >Create Project</button>
            </div>
            <EditFormCompany 
                visible={editFormVisible}
                onSubmit={sendProfileOnDataBase} 
                profile={profile}
            />
            <AddNewProjectFromCompany 
                visible={formCreateProject}
                showCreateFormProject={showCreateFormProject}
            />
        </Fragment>
    )
}

export default OfficeCompanyLeftBar;