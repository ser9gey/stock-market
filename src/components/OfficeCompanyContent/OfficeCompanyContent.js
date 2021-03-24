import { Fragment } from "react";
import ContentProjectsCompany from '../ContentProjectsCompany/ContentProjectsCompany';
import {useState} from 'react';
import classnames from 'classnames';

const OfficeCompanyContent = () => {

    const [btn, changeBtn] = useState(true);
    const [firstActiveBTn, setFirstActiveBTn] = useState(true);
    const [secondActiveBTn, setSecondActiveBTn] = useState(false)

    const requestsAndProjects = (e) => {
        if(e.target.id === "btn-4") {
            setFirstActiveBTn(false)
            setSecondActiveBTn(true)
            changeBtn(false)
        } else {
            setFirstActiveBTn(true)
            setSecondActiveBTn(false)
            changeBtn(true)
        }
    }

    return (
        <Fragment>
            <div className="content__btns">
                <button id="btn-3" className={classnames('content__btn content__btn_red', {'content__btn_red_active': firstActiveBTn})} onClick={requestsAndProjects}>Requests</button>
                <button id="btn-4" className={classnames('content__btn content__btn_red', {'content__btn_red_active': secondActiveBTn})} onClick={requestsAndProjects}>Projects</button>
            </div>
            <ContentProjectsCompany btn={btn}/>
        </Fragment>
    )
}

export default OfficeCompanyContent;