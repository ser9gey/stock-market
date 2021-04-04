import './allProjects.scss';
import Offer from '../Offer/Offer';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';

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