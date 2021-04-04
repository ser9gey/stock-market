import './addNewProjectFromCompany.scss';
import classnames from 'classnames';
import { useState } from 'react';
import { dataBase } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import addProject from '../../actions/addProject';

export const AddNewProjectFromCompany = ({ visible, showCreateFormProject, formCreateProject }) => {

    const [values, setValues] = useState({ nameCompany: '', nameProject: '', descriptionProject: '', requiredProfession: '', requiredSkills: '', payment: '' });

    const [validation, setValidation] = useState({ nameCompany: '', nameProject: '', descriptionProject: '', requiredProfession: '', requiredSkills: '', payment: '' });

    const profile = useSelector(state => state.profile);
    const dispatch = useDispatch();

    const onChangeCompanyProject = (e) => {

        const regExp = /\d|!|@|#|\$|%|\^|&|\*|\(|\)|-|_|=|\+|`|~|\/|\?|\\|\||,|<|>|'|"|№|;|:|\./;

        if(e.target.name !== "payment" && e.target.value.match(regExp)) {
            setValidation({...validation, [e.target.name]: "Please enter only text"});
        } else {
            setValues({ ...values, [e.target.name]: e.target.value });
            setValidation({...validation, [e.target.name]: ""});
        }
    }

    const AddProjectCompany = async () => {

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
            .then(() => showCreateFormProject(!formCreateProject))
    }

    return (
        <div className={classnames('form', {'form_active': visible})}>
            <div className="form__wrapp form__wrapp_little_padding">
                <div className="form__row">
                    <input placeholder="Name company" name="nameCompany" value={values.nameCompany} className="form__field" type="text" onChange={onChangeCompanyProject}/>
                    <p className="form__error">{validation.nameCompany}</p>
                </div>
                <div className="form__row">
                    <input placeholder="Name project" name="nameProject" value={values.nameProject} className="form__field" type="text"  onChange={onChangeCompanyProject}/>
                    <p className="form__error">{validation.nameProject}</p>
                </div>
                <div className="form__row">
                    <input placeholder="Description project" name="descriptionProject" value={values.descriptionProject} className="form__field" type="text"  onChange={onChangeCompanyProject}/>
                    <p className="form__error">{validation.descriptionProject}</p>
                </div>
                <div className="form__row">
                    <input placeholder="Required profession" name="requiredProfession" value={values.requiredProfession} className="form__field" type="text"  onChange={onChangeCompanyProject}/>
                    <p className="form__error">{validation.requiredProfession}</p>
                </div>
                <div className="form__row">
                    <input placeholder="Required skills" name="requiredSkills" value={values.requiredSkills} className="form__field" type="text"  onChange={onChangeCompanyProject}/>
                    <p className="form__error">{validation.requiredSkills}</p>
                </div>
                <div className="form__row">
                    <input placeholder="Payment" name="payment" value={values.payment} className="form__field" type="text"  onChange={onChangeCompanyProject}/>
                </div>
                <button data-state="close" className="form__wrapp-btn" onClick={AddProjectCompany}>Add Project</button>
            </div>
        </div>
    )
}
