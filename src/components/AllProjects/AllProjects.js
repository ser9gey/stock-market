import './allProjects.scss';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import {Offer} from '../AllProjects';

const AllProjects = () => {

    const projects = useSelector(state => state.projects);

    const offer = Object.keys(projects).map(id => {
        return <Offer key={id} project={projects[id]} />
    })

    return (
        <Fragment>
            {offer}
        </Fragment>
    )
}

export default AllProjects;