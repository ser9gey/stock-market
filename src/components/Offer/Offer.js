import { useSelector } from 'react-redux';
import './offer.scss';
import {dataBase} from '../../firebase';
import { useState } from 'react';

const Offer = ({ project }) => {

    const role = useSelector(state => state.profile.role);
    const profile = useSelector(state => state.profile);
    const [attribute, setAttribute] = useState(false)

    const sendRequest = async () => {

        const newRequestRef = await dataBase.ref('requests/').push()

        await newRequestRef.set({
            userUid: profile.uid,
            companyUid: project.profileUid,
            projectUid: project.projectId,
            requestUid: newRequestRef.key,
        })
        .then(() => setAttribute(true))
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