import '../OfficeUser/_OfficeUser.scss';
import user from '../../images/officeUser/user.jpg';

const OfficeUser = () => {
    return (
        <div className="office-user">
            <div className="office-user__wrapp">
                <div className="office-user-left-bar">
                    <div className="office-user-left-bar__header">
                        <div className="office-user-left-bar__header-logo">
                            <img className="office-user-left-bar__header-ava" src={user} alt="user"/>
                        </div>
                        <div className="office-user-left-bar__header-btns">
                            <button className="office-user-left-bar__header-btn">Logout</button>
                            <button className="office-user-left-bar__header-btn">Edit</button>
                        </div>
                    </div>
                    <div className="office-user-left-bar__content">
                        <p className="office-user-left-bar__content-info">Name: </p>
                        <p className="office-user-left-bar__content-info">Surname: </p>
                        <p className="office-user-left-bar__content-info">Profession: </p>
                        <p className="office-user-left-bar__content-info">Skills: </p>
                        <p className="office-user-left-bar__content-info">Skills Level: </p>
                    </div>
                    <div className="office-user-left-bar__footer">
                        <button className="office-user-left-bar__footer-btn">Search Projects</button>
                    </div>
                </div>
                <div className="office-user-right-bar">
                    <h2 className="office-user-right-bar__title">My Projects</h2>
                    <div className="office-user-right-bar__projects">
                        <div className="office-user-right-bar__projects-card">
                            <p className="office-user-right-bar__projects-card-text">Name of project: </p>
                            <p className="office-user-right-bar__projects-card-text">Company: </p>
                        </div>
                        <div className="office-user-right-bar__projects-card">
                            <p className="office-user-right-bar__projects-card-text">Name of project: </p>
                            <p className="office-user-right-bar__projects-card-text">Company: </p>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default OfficeUser;