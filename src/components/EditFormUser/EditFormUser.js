import './editFormUser.scss'
import {useEffect, useState} from 'react';
import classnames from 'classnames';

const EditUser = ({profile, onSubmit, visible}) => {
    const [values, setValues] = useState({name: "", surname: "", proff: "", skills: "", level: ""});
    useEffect(() => {
        setValues({...profile, proff: profile.profession})
    }, [profile]);

    const onChangeUserProfile = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    }

    return (
        <div className={classnames('form', {'form_active': visible})}>
            <div className="form__wrapp">
                <div className="form__row">
                    <p className="form__title">Enter you name:</p>
                    <input name="name" value={values.name} className="form__field" type="text" onChange={onChangeUserProfile} />
                </div>
                <div className="form__row">
                    <p className="form__title">Enter you surname:</p>
                    <input name="surname" value={values.surname} className="form__field" type="text" onChange={onChangeUserProfile} />
                </div>
                <div className="form__row">
                    <p className="form__title">Enter you profession:</p>
                    <input name="proff" value={values.proff} className="form__field" type="text" onChange={onChangeUserProfile} />
                </div>
                <div className="form__row">
                    <p className="form__title">Enter you skills:</p>
                    <input name="skills" value={values.skills} className="form__field" type="text" onChange={onChangeUserProfile} />
                </div>
                <div className="form__row">
                    <p className="form__title">Enter you skills level:</p>
                    <input name="level" value={values.level} className="form__field" type="text" onChange={onChangeUserProfile} />
                </div>
                <button data-state="close" className="form__wrapp-btn" onClick={(e) => {
                    onSubmit(values);
                }}>Change</button>
            </div>
        </div>
    )
}

export default EditUser;