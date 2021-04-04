import { useEffect, useMemo, useState } from 'react';
import ContentProjectsUserCard from '../ContentProjectsUserCard/ContentProjectsUserCard';
import PageAllProjectsForUser from '../PageAllProjectsForUser/PageAllProjectsForUser';
import {dataBase} from '../../firebase';
import addProject from '../../actions/addProject';
import { useDispatch, useSelector } from "react-redux";

import {addRequests} from '../../actions/requests';

const ContentProjectsUser = ({ btn }) => {

    const dispatch = useDispatch();
    const projects = useSelector(state => state.projects);
    const requests = useSelector(state => state.requests);

    useEffect(() => {
        dataBase.ref('projects/').once('value')
            .then(snapshot => dispatch(addProject(snapshot.val())))

        dataBase.ref('requests/').once('value')
            .then(snapshot => dispatch(addRequests(snapshot.val())))
    }, [])

    const myProjects = useMemo(() => {

        return Object.values(requests).reduce((sum, el) => {
            return el.status === "accepted" ? [...sum, el.projectUid] : [...sum]
        }, [])

    }, [projects, requests])

    const project = Object.values(projects).filter(project => {
        return myProjects.includes(project.projectId)
    }).map(el => <ContentProjectsUserCard key={el.projectId} values={el} />)

    return (
        <div className="content__projects">
            {btn
                ? project
                : <PageAllProjectsForUser projects={projects} />
            }

        </div>
    )
}

export default ContentProjectsUser;
