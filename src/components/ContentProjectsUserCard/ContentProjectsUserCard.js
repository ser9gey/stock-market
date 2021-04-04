const ContentProjectsCard = ({values}) => {
    return (
        <div className="content__projects-card">
            <p className="content__projects-card-text content__projects-card-text_title">Profession: {values.requiredProfession}</p>
            <p className="content__projects-card-text">Name of Company: {values.nameCompany}</p>
            <p className="content__projects-card-text">Name of Project: {values.nameProject}</p>
            <p className="content__projects-card-text">Description Project: {values.descriptionProject}</p>
            <p className="content__projects-card-text">Skills: {values.requiredSkills}</p>
            <p className="content__projects-card-text">Payment: {values.payment}</p>
        </div>
    )
}

export default ContentProjectsCard;