import './addNewProjectFromCompany.scss';
import classnames from 'classnames';
import { useState } from 'react';
import { dataBase } from '../../firebase';
import { useSelector } from 'react-redux';

export const AddNewProjectFromCompany = ({visible, showCreateFormProject, formCreateProject}) => {

    const [values, setValues] = useState({nameCompany: '', nameProject: '', descriptionProject: '', requiredProfession: '', requiredSkills: '', payment: ''});
    const profile = useSelector(state => state.profile);

    const onChangeCompanyProject = (e) => {
        setValues({...values, [e.target.name]: e.target.value})  
    }

    const AddProjectCompany = async () => {

        const key = dataBase.ref().push().key
        
        await dataBase.ref('projects/').push(
            {
                nameCompany: values.nameCompany,
                nameProject: values.nameProject,
                descriptionProject: values.descriptionProject,
                requiredProfession: values.requiredProfession,
                requiredSkills: values.requiredSkills,
                payment: values.payment,
                profileUid: profile.uid,
                projectId: key,
            }
        )
        .then(() => showCreateFormProject(!formCreateProject))
    }

    return (
        <div className={classnames('form', {'form_active': visible})}>
            <div className="form__wrapp form__wrapp_little_padding">
                <div className="form__row">
                    <p className="form__title">Name company:</p>
                    <input name="nameCompany" value={values.nameCompany} className="form__field" type="text" onChange={onChangeCompanyProject}/>
                </div>
                <div className="form__row">
                    <p className="form__title">Name project:</p>
                    <input name="nameProject" value={values.nameProject} className="form__field" type="text"  onChange={onChangeCompanyProject}/>
                </div>
                <div className="form__row">
                    <p className="form__title">Description project:</p>
                    <input name="descriptionProject" value={values.descriptionProject} className="form__field" type="text"  onChange={onChangeCompanyProject}/>
                </div>
                <div className="form__row">
                    <p className="form__title">Required profession:</p>
                    <input name="requiredProfession" value={values.requiredProfession} className="form__field" type="text"  onChange={onChangeCompanyProject}/>
                </div>
                <div className="form__row">
                    <p className="form__title">Required skills:</p>
                    <input name="requiredSkills" value={values.requiredSkills} className="form__field" type="text"  onChange={onChangeCompanyProject}/>
                </div>
                <div className="form__row">
                    <p className="form__title">Payment:</p>
                    <input name="payment" value={values.payment} className="form__field" type="text"  onChange={onChangeCompanyProject}/>
                </div>
                <button data-state="close" className="form__wrapp-btn" onClick={AddProjectCompany}>Add Project</button>
            </div>
        </div>
    )
}
