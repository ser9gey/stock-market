import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {addRequests, ContentProjectsUserCard, PageAllProjectsForUser, addProject, allProjects, allRequests} from '.';

const ContentProjectsUser = ({ showProjects, searchValue }) => {

    const dispatch = useDispatch();
    const projects = useSelector(state => state.projects);
    const requests = useSelector(state => state.requests);
    const profile = useSelector(state => state.profile.uid);

    useEffect(() => {
        allProjects()
            .then(snapshot => dispatch(addProject(snapshot.val())))

        allRequests()
            .then(snapshot => dispatch(addRequests(snapshot.val())))
    }, [])

    const myProjects = useMemo(() => {

        return Object.values(requests).reduce((sum, el) => {
            return el.status === "accepted" && el.userUid === profile ? [...sum, el.projectUid] : [...sum]
        }, [])

    }, [projects, requests, profile])

    const filterOffer = Object.values(projects).filter(el => {
        return searchValue === '' ? el : el.nameProject.toLowerCase().includes(searchValue.toLowerCase());  
    })

    const project = Object.values(filterOffer).filter(el => {
        return myProjects.includes(el.projectId)
    }).map(el => <ContentProjectsUserCard key={el.projectId} values={el} />)

    return (
        <div className="content__projects">
                {showProjects
                    ? project
                    : <PageAllProjectsForUser filterOffer={filterOffer} projects={projects} />
                }
        </div>
    )
}

export default ContentProjectsUser;