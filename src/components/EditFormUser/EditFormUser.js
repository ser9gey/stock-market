import './editFormUser.scss'
import {useEffect, useState} from 'react';
import classnames from 'classnames';

const EditUser = ({profile, onSubmit, visible}) => {
    const [values, setValues] = useState({name: "", surname: "", proff: "", skills: "", level: ""});
    const [validation, setValidation] = useState({name: "", surname: "", proff: "", skills: "", level: ""})

    useEffect(() => {
        setValues({...profile, proff: profile.profession})
    }, [profile]);

    const onChangeUserProfile = (e) => {

        const regExp = /\d|!|@|#|\$|%|\^|&|\*|\(|\)|_|=|\+|`|~|\/|\?|\\|\||<|>|'|"|№|;|:|\./;

        if(e.target.name !== "level" && e.target.value.match(regExp)) {
            setValidation({...validation, [e.target.name]: "Please enter only text"});
        } else {
            setValues({...values, [e.target.name]: e.target.value});
            setValidation({...validation, [e.target.name]: ""});
        }
    }

    return (
        <div className={classnames('form', {'form_active': visible})}>
            <div className="form__wrapp">
                <div className="form__row">
                    <input placeholder="Enter you name" name="name" value={values.name} className="form__field" type="text" onChange={onChangeUserProfile} />
                    <p className="form__error">{validation.name}</p>
                </div>
                <div className="form__row">
                    <input placeholder="Enter you surname" name="surname" value={values.surname} className="form__field" type="text" onChange={onChangeUserProfile} />
                    <p className="form__error">{validation.surname}</p>
                </div>
                <div className="form__row">
                    <input placeholder="Enter you profession" name="proff" value={values.proff} className="form__field" type="text" onChange={onChangeUserProfile} />
                    <p className="form__error">{validation.proff}</p>
                </div>
                <div className="form__row">
                    <input placeholder="Enter you skills" name="skills" value={values.skills} className="form__field" type="text" onChange={onChangeUserProfile} />
                    <p className="form__error">{validation.skills}</p>
                </div>
                <div className="form__row">
                    <input placeholder="Enter you skills level" name="level" value={values.level} className="form__field" type="text" onChange={onChangeUserProfile} />
                </div>
                <button data-state="close" className="form__wrapp-btn" onClick={(e) => {
                    onSubmit(values);
                }}>Change</button>
            </div>
        </div>
    )
}

export default EditUser;