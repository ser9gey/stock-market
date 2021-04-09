import { Fragment } from 'react';
import './officeUserContent.scss';
import { useState } from 'react';
import classnames from 'classnames';
import {ContentProjectsUser, SearchProjects} from '.';

const OfficeUserContent = () => {
    const [showProjects, setShowProjects] = useState(true);
    const [searchValue, setSearchValue] = useState('');

    const searchFilter = (e) => setSearchValue(e.target.value);

    const showAndSearchProjects = (e) => setShowProjects(e.target.id === "btn-1");

    return (
        <Fragment>
            <div className="content__btns">
                <button id="btn-1" className={classnames('content__btn content__btn_yellow', {'content__btn_yellow_active': showProjects})} onClick={showAndSearchProjects}>My Projects</button>
                <button id="btn-2" className={classnames('content__btn content__btn_yellow', {'content__btn_yellow_active': !showProjects})} onClick={showAndSearchProjects}>Search Projects</button> 
            </div>
            <SearchProjects searchFilter={searchFilter}/>
            <ContentProjectsUser showProjects={showProjects} searchValue={searchValue}/>
        </Fragment>
    )
}

export default OfficeUserContent;