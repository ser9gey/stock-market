import { useEffect, useMemo } from 'react';
import {dataBase} from '../../firebase';
import { useDispatch, useSelector } from "react-redux";
import {addRequests, ContentProjectsUserCard, PageAllProjectsForUser, addProject} from '../ContentProjectsUser';

const ContentProjectsUser = ({ showProjects }) => {

    const dispatch = useDispatch();
    const projects = useSelector(state => state.projects);
    const requests = useSelector(state => state.requests);
    const profile = useSelector(state => state.profile.uid);

    useEffect(() => {
        dataBase.ref('projects/').once('value')
            .then(snapshot => dispatch(addProject(snapshot.val())))

        dataBase.ref('requests/').once('value')
            .then(snapshot => dispatch(addRequests(snapshot.val())))
    }, [])

    const myProjects = useMemo(() => {

        return Object.values(requests).reduce((sum, el) => {
            return el.status === "accepted" && el.userUid === profile ? [...sum, el.projectUid] : [...sum]
        }, [])

    }, [projects, requests, profile])

    const project = Object.values(projects).filter(project => {
        return myProjects.includes(project.projectId)
    }).map(el => <ContentProjectsUserCard key={el.projectId} values={el} />)

    return (
        <div className="content__projects">
            {showProjects
                ? project
                : <PageAllProjectsForUser projects={projects} />
            }
        </div>
    )
}

export default ContentProjectsUser;