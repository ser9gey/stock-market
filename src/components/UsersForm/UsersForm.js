import {LogInForm, SignIn, LogInFields, SignInFields} from '../UsersForm';

export const UsersForm = ({onLoginFormActiveChanged, isLoginFormActive}) => {
    return (
        <form id="form-1" className="home-content__form">
            <div className="home-content__form-tabs">
                <SignIn isLoginFormActive={isLoginFormActive} onLoginFormActiveChanged={onLoginFormActiveChanged} />
                <LogInForm isLoginFormActive={isLoginFormActive} onLoginFormActiveChanged={onLoginFormActiveChanged} />
            </div>
            <LogInFields isLoginFormActive={isLoginFormActive} />
            <SignInFields isLoginFormActive={isLoginFormActive} />
        </form>
    )
}