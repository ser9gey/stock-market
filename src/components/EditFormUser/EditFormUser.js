import './editFormUser.scss'
import {useEffect, useState} from 'react';
import classnames from 'classnames';
import {UserFormField} from '../EditFormUser';

const EditUser = ({profile, onSubmit, visible, disableBtn}) => {
    const [values, setValues] = useState({name: "", surname: "", proff: "", skills: "", level: ""});
    const [validation, setValidation] = useState({name: "", surname: "", proff: "", skills: "", level: ""})

    useEffect(() => {
        setValues({...profile, proff: profile.profession})
    }, [profile]);

    const validationFieldsForm = (e) => {
        const regExp = /\d|!|@|#|\$|%|\^|&|\*|\(|\)|_|=|\+|`|~|\/|\?|\\|\||<|>|'|"|№|;|:|\./;
        return e.target.name !== "level" && e.target.value.match(regExp) ? false : true
    }

    const onChangeUserProfile = (e) => {

        if(validationFieldsForm(e)) {
            setValidation({...validation, [e.target.name]: ""});
            setValues({...values, [e.target.name]: e.target.value});
        } else {
            setValidation({...validation, [e.target.name]: "Please enter only text"});
        }
    }

    const fields = ["name", "surname", "proff", "skills", "level"];

    return (
        <div className={classnames('form', {'form_active': visible})}>
            <div className="form__wrapp">
                {fields.map(el => {
                    return <UserFormField key={el} name={el} values={values} validation={validation} onChangeUserProfile={onChangeUserProfile} />
                })}
                <button data-state="close" disabled={disableBtn} className="form__wrapp-btn" onClick={(e) => {
                    onSubmit(values);
                }}>Change</button>
            </div>
        </div>
    )
}

export default EditUser;