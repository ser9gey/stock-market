import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addRequests, AllProjects, ContentProjectsCompanyCard, addProject, RequstsData, 
        projectsOrderedByProfileUid, requestsOrderedByCompanyUid } from '../ContentProjectsCompany';

const ContentProjectsCompany = ({ showRequests, searchValue }) => {

    const profile = useSelector(state => state.profile);
    const requests = useSelector(state => state.requests);
    const projects = useSelector(state => state.projects);
    const dispatch = useDispatch();

    useEffect(() => {

        projectsOrderedByProfileUid(profile.uid)
            .then(snapshot => dispatch(addProject(snapshot.val())))

        requestsOrderedByCompanyUid(profile.uid)
            .then(snapshot => getRequstsData(snapshot.val()))

    }, [])

    const getRequstsData = async (snapshot) => {
        RequstsData(snapshot)
        .then(result => dispatch(addRequests(Object.values(result).reduce((prev, cur) => ({...prev, ...cur}), {}))));
    }

    const filterProjects = Object.values(projects).filter(el => {
        return searchValue === '' ? el : el.nameProject.toLowerCase().includes(searchValue.toLowerCase());  
    })

    const filterRequest = Object.values(requests).filter(el => {
        return searchValue === '' ? el : el.project.nameProject.toLowerCase().includes(searchValue.toLowerCase());  
    })

    return (
        <div className="content__projects">
            {showRequests
                ? Object.keys(filterRequest).map(requestUid => {
                    return <ContentProjectsCompanyCard key={requestUid} values={filterRequest[requestUid]}/>
                })
                :<AllProjects filterProjects={filterProjects}/>
            }  
        </div>
    )
}

export default ContentProjectsCompany;