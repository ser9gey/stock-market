export const UserFormField = ({name, values, validation, onChangeUserProfile}) => {
    return (
        <div className="form__row">
            <input placeholder={`Enter you ${name}`} name={name} value={values[name]} className="form__field" type="text" onChange={onChangeUserProfile} />
            <p className="form__error">{validation[name]}</p>
        </div>
    )
}