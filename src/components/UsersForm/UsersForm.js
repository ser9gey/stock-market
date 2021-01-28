import { LogInForm } from '../LogInForm/LogInForm';
import { SignIn } from '../SignIn/SignIn';
import { LogInFields } from '../LogInFields/LogInFields';
import { SignInFields } from '../SignInFields/SignInFields';

export const UsersForm = ({changeFieldsForm, state}) => {
    return (
        <form id="form-1" className="home-content__form">
            <div className="home-content__form-tabs">
                <LogInForm state={state} changeFieldsForm={changeFieldsForm} />
                <SignIn state={state} changeFieldsForm={changeFieldsForm} />
            </div>
            <LogInFields state={state} />
            <SignInFields state={state} />
        </form>
    )
}