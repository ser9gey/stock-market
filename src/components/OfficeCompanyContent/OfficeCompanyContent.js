import { Fragment } from "react";
import ContentProjectsCompany from '../ContentProjectsCompany/ContentProjectsCompany';
import {useState} from 'react';

const OfficeCompanyContent = () => {

    const [btn, changeBtn] = useState(true);

    const requestsAndProjects = (e) => {
        changeBtn(e.target.id === "btn-3"); 
    }

    return (
        <Fragment>
            <div className="content__btns">
                <button id="btn-3" className="content__btn content__btn_red" onClick={requestsAndProjects}>Requests</button>
                <button id="btn-4" className="content__btn content__btn_red" onClick={requestsAndProjects}>Projects</button>
            </div>
            <ContentProjectsCompany btn={btn}/>
        </Fragment>
    )
}

export default OfficeCompanyContent;