import './addNewProjectFromCompany.scss';
import { useState } from 'react';
import { dataBase } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import {CompanyFormField, addProject} from '../AddNewProjectFromCompany';

export const AddNewProjectFromCompany = ({ visible, showCreateFormProject }) => {

    const [values, setValues] = useState({ nameCompany: '', nameProject: '', descriptionProject: '', requiredProfession: '', requiredSkills: '', payment: '' });
    const [validation, setValidation] = useState({ nameCompany: '', nameProject: '', descriptionProject: '', requiredProfession: '', requiredSkills: '', payment: '' });
    const [disableBtn, setDisableBtn] = useState(false);

    const profile = useSelector(state => state.profile);
    const dispatch = useDispatch();

    const validationFieldsForm = (e) => {
        const regExp = /\d|!|@|#|\$|%|\^|&|\*|\(|\)|-|_|=|\+|`|~|\/|\?|\\|\||,|<|>|'|"|№|;|:|\./;
        return e.target.name !== "payment" && e.target.value.match(regExp) ? false : true
    }

    const onChangeCompanyProject = (e) => {
        
        if(validationFieldsForm(e)) {
            setValidation({ ...validation, [e.target.name]: "" });
            setValues({ ...values, [e.target.name]: e.target.value });
        } else {
            setValidation({ ...validation, [e.target.name]: "Please enter only text" }) ;
        }  
    } 

    const AddProjectCompany = async () => {

        setDisableBtn(true);
        const newProjectRef = await dataBase.ref('projects/').push()

        await newProjectRef.set(
            {
                nameCompany: values.nameCompany,
                nameProject: values.nameProject,
                descriptionProject: values.descriptionProject,
                requiredProfession: values.requiredProfession,
                requiredSkills: values.requiredSkills,
                payment: values.payment,
                profileUid: profile.uid,
                projectId: newProjectRef.key,
            }
        )

        await dataBase.ref('projects/').limitToLast(1).once('value')
            .then(snapshot => dispatch(addProject(snapshot.val())))
            .then(() => showCreateFormProject(false))
    }

    const fields = [
        {name: "nameCompany", placeholder: "name company"},
        {name: "nameProject", placeholder: "name project"},
        {name: "descriptionProject", placeholder: "description project"},
        {name: "requiredProfession", placeholder: "required profession"},
        {name: "requiredSkills", placeholder: "required skills"},
        {name: "payment", placeholder: "payment"},
    ];

    return (
        <div className={classnames('form', {'form_active': visible})}>
            <div className="form__wrapp form__wrapp_little_padding">
                {fields.map(el => {
                    return <CompanyFormField key={el.name} placeholder={el.placeholder} name={el.name} values={values[el.name]} validation={validation[el.name]} onChangeCompanyProject={onChangeCompanyProject} />
                })}
                <button data-state="close" className="form__wrapp-btn" disabled={disableBtn} onClick={AddProjectCompany}>Add Project</button>
            </div>
        </div>
    )
}
