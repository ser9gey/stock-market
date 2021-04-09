import classnames from 'classnames';

export const SignIn = ({onLoginFormActiveChanged, isLoginFormActive}) => {

    return (
        <button id="signIn" type="button" className={classnames('home-content__form-btn', {' home-content__form-btn_active': isLoginFormActive})} onClick={ onLoginFormActiveChanged }>Sign In</button>
    )
}