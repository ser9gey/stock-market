export const LogInForm = ({onLoginFormActiveChanged, isLoginFormActive}) => {

    let className = "home-content__form-btn";

    if(!isLoginFormActive) {
        className += " home-content__form-btn_active"
    } else {
        className = "home-content__form-btn";
    }

    return (
        <button id="logIn" type="button" className={className} onClick={ onLoginFormActiveChanged }>Log In</button>
    )
}