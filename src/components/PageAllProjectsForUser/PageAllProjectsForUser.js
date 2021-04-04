import { Fragment } from "react";
import Offer from '../Offer/Offer';

const PageAllProjectsForUser = ({projects}) => {

    const offer = Object.keys(projects).map(id => {
        return <Offer key={id} project={projects[id]} />
    })

    return (
        <Fragment>
            {offer}
        </Fragment>
    )
}

export default PageAllProjectsForUser