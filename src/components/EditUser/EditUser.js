import './editUser.scss'

const EditUser = ({userEditProfile, btn, profile, onChangeUserProfile}) => {

    let className = "edit-user";
    if(btn) {
        className += " edit-user_active"
    } else {
        className = "edit-user";
    }

    return (
        <div className={className}>
            <div className="edit-user__wrapp">
                <div className="edit-user__row">
                    <button data-state="close" className="edit-user__row-btn" onClick={userEditProfile}>X</button>
                </div>
                <div className="edit-user__row">
                    <p className="edit-user__title">Enter you name:</p>
                    <input name="name" value={profile} className="edit-user__field" type="text" onChange={onChangeUserProfile} />
                </div>
                <div className="edit-user__row">
                    <p className="edit-user__title">Enter you surname:</p>
                    <input name="surname" value={profile} className="edit-user__field" type="text" onChange={onChangeUserProfile} />
                </div>
                <div className="edit-user__row">
                    <p className="edit-user__title">Enter you profession:</p>
                    <input name="proff" value={profile} className="edit-user__field" type="text" onChange={onChangeUserProfile} />
                </div>
                <div className="edit-user__row">
                    <p className="edit-user__title">Enter you skills:</p>
                    <input name="skill" value={profile} className="edit-user__field" type="text" onChange={onChangeUserProfile} />
                </div>
                <div className="edit-user__row">
                    <p className="edit-user__title">Enter you skills level:</p>
                    <input name="level" value={profile} className="edit-user__field" type="text" onChange={onChangeUserProfile} />
                </div>
                {/* <button className="edit-user__wrapp-btn">Change</button> */}
            </div>
        </div>
    )
}

export default EditUser;