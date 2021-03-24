import {useDispatch} from 'react-redux';
import {dataBase} from '../../firebase';
import {updateRequests} from '../../actions/requests';

const ContentProjectsCompanyCard = ({values}) => {
    const dispath = useDispatch()

    const whatchChangesOnce = async (requestUid) => {
        const newReq = await dataBase.ref('requests/' + values.requestUid).once('value');
        dispath(updateRequests(newReq.val()));
    }

    const acceptRequest = async (values) => {
        await dataBase.ref('requests/' + values.requestUid).update({status: 'accepted'});
        whatchChangesOnce(values.requestUid)
    }

    const rejectRequest = async (values) => {
        await dataBase.ref('requests/' + values.requestUid).update({status: 'rejected'});
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
                    <button className="content__projects-card-btn content__projects-card-btn_accept" onClick={() => acceptRequest(values)} >Accept</button>
                    <button className="content__projects-card-btn content__projects-card-btn_reject" onClick={() => rejectRequest(values)} >Reject</button>
                </div>
            }
        </div>
    )
}

export default ContentProjectsCompanyCard;