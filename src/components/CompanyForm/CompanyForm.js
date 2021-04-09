import {LogInForm, SignIn, LogInFields, SignInFields} from '../CompanyForm';

export const CompanyForm = ({onLoginFormActiveChanged, isLoginFormActive}) => {
    return (
        <form id="form-2" className="home-content__form home-content__form_red">
            <div className="home-content__form-tabs">
                <SignIn isLoginFormActive={isLoginFormActive} onLoginFormActiveChanged={onLoginFormActiveChanged} />
                <LogInForm isLoginFormActive={isLoginFormActive} onLoginFormActiveChanged={onLoginFormActiveChanged} />
            </div>
            <LogInFields isLoginFormActive={isLoginFormActive} />
            <SignInFields isLoginFormActive={isLoginFormActive} />
        </form>
    )
}