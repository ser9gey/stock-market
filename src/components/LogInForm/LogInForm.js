import classnames from 'classnames';

export const LogInForm = ({onLoginFormActiveChanged, isLoginFormActive}) => {

    return (
        <button id="logIn" type="button" className={classnames('home-content__form-btn', {' home-content__form-btn_active': !isLoginFormActive})} onClick={ onLoginFormActiveChanged }>Log In</button>
    )
}