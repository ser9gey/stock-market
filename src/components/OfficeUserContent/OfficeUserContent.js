import { Fragment } from 'react';
import ContentProjectsUser from '../ContentProjectsUser/ContentProjectsUser';
import './officeUserContent.scss';
import { useState } from 'react';

const OfficeUserContent = () => {
    const [btn, changeBtn] = useState(true);

    const showAndSearchProjects = (e) => {
        changeBtn(e.target.id === "btn-1");
    }

    return (
        <Fragment>
            <div className="content__btns">
                <button id="btn-1" className="content__btn content__btn_yellow" onClick={showAndSearchProjects}>My Projects</button>
                <button id="btn-2" className="content__btn content__btn_yellow" onClick={showAndSearchProjects}>Search Projects</button>
            </div>
            <ContentProjectsUser btn={btn}/>
        </Fragment>
    )
}

export default OfficeUserContent;