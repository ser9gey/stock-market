import './offer.scss';

const Offer = ({projects}) => {

    return (
        <div className="content__projects-offer offer">
            <p className="offer__title">Profession: {projects.requiredProfession}</p>
            <p className="offer__text">Name Company: {projects.nameCompany}</p>
            <p className="offer__text">Name Project: {projects.nameProject}</p>
            <p className="offer__text">Description Project: {projects.descriptionProject}</p>
            <p className="offer__text">Skills: {projects.requiredSkills}</p>
            <p className="offer__text">Payment: {projects.payment}</p>
            <button className="offer__btn">Send a request</button>
        </div>
    )
}

export default Offer;