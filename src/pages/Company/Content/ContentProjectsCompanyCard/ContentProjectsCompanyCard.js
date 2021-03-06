import {useDispatch} from 'react-redux';
import { useState } from 'react';
import {updateRequests, acceptedRequest, rejectedRequest, watchувChangesOnce} from '../ContentProjectsCompanyCard';

const ContentProjectsCompanyCard = ({values}) => {
    const [disableBtnAccept, setDisableBtnAccept] = useState(false);
    const [disableBtnReject, setDisableBtnReject] = useState(false);
    const dispath = useDispatch();

    const whatchChangesOnce = async (requestUid) => {
        const newReq = await watchувChangesOnce(values.requestUid)
        dispath(updateRequests(newReq.val()));
    }

    const acceptRequest = async (values) => {
        setDisableBtnAccept(true);
        await acceptedRequest(values.requestUid)
        whatchChangesOnce(values.requestUid)
    }

    const rejectRequest = async (values) => {
        setDisableBtnReject(true);
        await rejectedRequest(values.requestUid)
        whatchChangesOnce(values.requestUid);
    }

    return (
        <div className="content__projects-card">
            <p className="content__projects-card-text content__projects-card-text_title">Name of project: {values.project?.nameProject}</p>
            <p className="content__projects-card-text">Name user: {values.profile?.name}</p>
            <p className="content__projects-card-text">Surname user: {values.profile?.surname}</p>
            <p className="content__projects-card-text">Profession of the user: {values.profile?.profession}</p>
            <p className="content__projects-card-text">User skills: {values.profile?.skills}</p>
            <p className="content__projects-card-text">User skills level: {values.profile?.level}</p>
            {values.status
                ?<p className={`content__projects-card-status ${values.status === 'accepted' ? 'content__projects-card-status_accept' : 'content__projects-card-status_reject'}`}>Status: {values.status}</p>
                :<div className="content__projects-card-btns">
                    <button className="content__projects-card-btn content__projects-card-btn_accept" onClick={() => acceptRequest(values)} disabled={disableBtnAccept}>Accept</button>
                    <button className="content__projects-card-btn content__projects-card-btn_reject" onClick={() => rejectRequest(values)} disabled={disableBtnReject}>Reject</button>
                </div>
            }
        </div>
    )
}

export default ContentProjectsCompanyCard;