import './allProjects.scss';
import { Fragment } from 'react';
import {Offer} from '../AllProjects';

const AllProjects = ({filterProjects}) => {

    const offer = Object.keys(filterProjects).map(id => {
        return <Offer key={id} project={filterProjects[id]} />
    })

    return (
        <Fragment>
            {offer}
        </Fragment>
    )
}

export default AllProjects;