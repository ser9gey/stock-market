import './offer.scss';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import {sendedReques} from '../Offer';

const Offer = ({ project }) => {

    const role = useSelector(state => state.profile.role);
    const profile = useSelector(state => state.profile);
    const [attribute, setAttribute] = useState(false)

    const sendRequest = async () => {
        try {
            await sendedReques(profile.uid, project)
            .then(() => setAttribute(true)) 
        } catch (error) {
            console.log(error);
        }   
    }

    return (
        <div className="content__projects-offer offer">
            <p className="offer__title">Profession: {project.requiredProfession}</p>
            <p className="offer__text">Name Company: {project.nameCompany}</p>
            <p className="offer__text">Name Project: {project.nameProject}</p>
            <p className="offer__text">Description Project: {project.descriptionProject}</p>
            <p className="offer__text">Skills: {project.requiredSkills}</p>
            <p className="offer__text">Payment: {project.payment}</p>
            {role === 'user'
                ? <button disabled={attribute} className="offer__btn" onClick={sendRequest}>Send a request</button>
                : null
            }

        </div>
    )
}

export default Offer;