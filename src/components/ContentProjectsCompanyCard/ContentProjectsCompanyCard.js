const ContentProjectsCompanyCard = () => {
    return (
        <div className="content__projects-card">
            <p className="content__projects-card-text">Name of project: </p>
            <p className="content__projects-card-text">Name user: </p>
            <p className="content__projects-card-text">Profession of the user: </p>
            <p className="content__projects-card-text">User skills: </p>
            <p className="content__projects-card-text">User skills level: </p>
            <div className="content__projects-card-btns">
                <button className="content__projects-card-btn content__projects-card-btn_accept">Accept</button>
                <button className="content__projects-card-btn content__projects-card-btn_reject">Reject</button>
            </div>
        </div>
    )
}

export default ContentProjectsCompanyCard;