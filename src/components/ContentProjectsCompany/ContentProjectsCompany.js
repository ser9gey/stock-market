import { useEffect } from "react";
import AllProjects from "../AllProjects/AllProjects";
import ContentProjectsCompanyCard from '../ContentProjectsCompanyCard/ContentProjectsCompanyCard';
import {dataBase} from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import addProject from '../../actions/addProject';
import {addRequests} from '../../actions/requests';

const ContentProjectsCompany = ({btn}) => {

    const profile = useSelector(state => state.profile);
    const requests = useSelector(state => state.requests);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dataBase.ref('projects/').orderByChild("profileUid").equalTo(profile.uid).once('value', projects => {
            dispatch(addProject(projects.val()))
        });
        dataBase.ref('requests/').orderByChild('companyUid').equalTo(profile.uid).once('value', snapshot => { getRequstsData(snapshot.val()) });
    }, []) //btn - dependences

    const getRequstsData = async (snapshot) => {
        const promises = Object.values(snapshot).map( el => {
            return Promise.all([dataBase.ref('profiles/' + el.userUid).once('value'), dataBase.ref('projects/' + el.projectUid).once('value')])
            .then(result => {
                return {
                    [el.requestUid]: {
                        profile: result[0].val(),
                        project: result[1].val(),
                        ...el
                    }
                }
            })
        })

        return Promise.all(promises)
            .then(result => dispatch(addRequests(Object.values(result).reduce((prev, cur) => ({...prev, ...cur}), {}))));  
    }

    return (
        <div className="content__projects">
            {btn
                ? Object.keys(requests).map(requestUid => {
                    return <ContentProjectsCompanyCard key={requestUid} values={requests[requestUid]}/>
                })
                :<AllProjects />
            }  
        </div>
    )
}

export default ContentProjectsCompany;