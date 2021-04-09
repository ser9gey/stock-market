import { Fragment } from "react";
import {Offer} from '.';

const PageAllProjectsForUser = ({filterOffer}) => {

    const offer = Object.keys(filterOffer).map(id => {
        return <Offer key={id} project={filterOffer[id]} />
    })

    return (
        <Fragment>
            {offer}
        </Fragment>
    )
}

export default PageAllProjectsForUser