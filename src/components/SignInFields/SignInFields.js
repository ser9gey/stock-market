export const SignInFields = ({state}) => {

    let className = "home-content__form-fields";

    if(state) {
        className = "home-content__form-fields";
    } else {
        className += " home-content__form-fields_active";
    }

    return (
        <div className={className}>
            <input className="home-content__form-fields-input" placeholder="Name" required></input>
            <input className="home-content__form-fields-input" placeholder="Password" required></input>
            <button className="home-content__form-fields-btn">Enter</button>
        </div>
    )
}