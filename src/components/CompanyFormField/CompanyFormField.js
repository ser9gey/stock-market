export const CompanyFormField = ({name, placeholder, values, validation, onChangeCompanyProject}) => {
    return (
        <div className="form__row">
            <input placeholder={`Enter ${placeholder}`} name={name} value={values} className="form__field" type="text" onChange={onChangeCompanyProject} />
            <p className="form__error">{validation}</p>
        </div>
    )
}