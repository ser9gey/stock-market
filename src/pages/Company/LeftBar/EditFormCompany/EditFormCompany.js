import './editFormCompany.scss';
import classnames from 'classnames';
import { useEffect, useState } from 'react';

export const EditFormCompany = ({visible, onSubmit, profile}) => {

    const [values, setValues] = useState({info: ""});

    useEffect(() => {
        setValues({...profile, info: profile.info})
    }, [profile]);

    const onChangeCompanyProfile = (e) => setValues({...values, [e.target.name]: e.target.value})

    return (
        <div className={classnames('form', {'form_active': visible})}>
            <textarea className="form__textarea" name="info" value={values.info} placeholder="Edit Profile" maxLength="410" onChange={onChangeCompanyProfile} />
            <button className="form__wrapp-btn" onClick={() => { onSubmit(values)}}>Change</button>
        </div>
    )
}