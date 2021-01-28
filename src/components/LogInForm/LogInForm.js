export const LogInForm = ({changeFieldsForm, state}) => {

    let className = "home-content__form-btn";

    if(state) {
        className += " home-content__form-btn_active"
    } else {
        className = "home-content__form-btn";
    }


    return (
        <button id="logIn" type="button" className={className} onClick={ changeFieldsForm }>Log In</button>
    )
}