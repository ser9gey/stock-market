import { Fragment } from "react";
import {useState} from 'react';
import classnames from 'classnames';
import {ContentProjectsCompany, SearchProjects} from '../OfficeCompanyContent';

const OfficeCompanyContent = () => {

    const [showRequests, setShowRequests] = useState(true);
    const [searchValue, setSearchValue] = useState('');

    const searchFilter = (e) => setSearchValue(e.target.value);

    const requestsAndProjects = (e) => setShowRequests(e.target.id === "btn-3");

    return (
        <Fragment>
            <div className="content__btns">
                <button id="btn-3" className={classnames('content__btn content__btn_red', {'content__btn_red_active': showRequests})} onClick={requestsAndProjects}>Requests</button>
                <button id="btn-4" className={classnames('content__btn content__btn_red', {'content__btn_red_active': !showRequests})} onClick={requestsAndProjects}>Projects</button>
            </div>
            <SearchProjects searchFilter={searchFilter}/>
            <ContentProjectsCompany showRequests={showRequests} searchValue={searchValue}/>
        </Fragment>
    )
}

export default OfficeCompanyContent;