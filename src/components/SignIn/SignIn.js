export const SignIn = ({changeFieldsForm, state}) => {

    let className = "home-content__form-btn";

    if(!state) {
        className += " home-content__form-btn_active"
    } else {
        className = "home-content__form-btn";
    }

    return (
        <button id="signIn" type="button" className={className} onClick={ changeFieldsForm }>Sign In</button>
    )
}