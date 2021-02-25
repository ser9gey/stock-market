import './editUser.scss'

const EditUser = ({stateEditBtn, profile, onChangeUserProfile, sendProfileOnDataBase}) => {

    return (
        <div className={`edit-user ${stateEditBtn ? " edit-user_active" : "edit-user"}`}>
            <div className="edit-user__wrapp">
                <div className="edit-user__row">
                    <p className="edit-user__title">Enter you name:</p>
                    <input name="name" value={profile.name} className="edit-user__field" type="text" onChange={onChangeUserProfile} />
                </div>
                <div className="edit-user__row">
                    <p className="edit-user__title">Enter you surname:</p>
                    <input name="surname" value={profile.surname} className="edit-user__field" type="text" onChange={onChangeUserProfile} />
                </div>
                <div className="edit-user__row">
                    <p className="edit-user__title">Enter you profession:</p>
                    <input name="proff" value={profile.proff} className="edit-user__field" type="text" onChange={onChangeUserProfile} />
                </div>
                <div className="edit-user__row">
                    <p className="edit-user__title">Enter you skills:</p>
                    <input name="skills" value={profile.skills} className="edit-user__field" type="text" onChange={onChangeUserProfile} />
                </div>
                <div className="edit-user__row">
                    <p className="edit-user__title">Enter you skills level:</p>
                    <input name="level" value={profile.level} className="edit-user__field" type="text" onChange={onChangeUserProfile} />
                </div>
                <button data-state="close" className="edit-user__wrapp-btn" onClick={sendProfileOnDataBase}>Change</button>
            </div>
        </div>
    )
}

export default EditUser;