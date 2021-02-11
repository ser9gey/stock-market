import { LogInForm } from '../LogInForm/LogInForm';
import { SignIn } from '../SignIn/SignIn';
import { LogInFields } from '../LogInFields/LogInFields';
import { SignInFields } from '../SignInFields/SignInFields';

export const CompanyForm = ({onLoginFormActiveChanged, isLoginFormActive}) => {
    return (
        <form id="form-2" className="home-content__form home-content__form_red">
            <div className="home-content__form-tabs">
                <LogInForm isLoginFormActive={isLoginFormActive} onLoginFormActiveChanged={onLoginFormActiveChanged} />
                <SignIn isLoginFormActive={isLoginFormActive} onLoginFormActiveChanged={onLoginFormActiveChanged} />
            </div>
            <LogInFields isLoginFormActive={isLoginFormActive} />
            <SignInFields isLoginFormActive={isLoginFormActive} />
        </form>
    )
}