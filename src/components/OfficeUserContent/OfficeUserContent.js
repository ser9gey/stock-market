import { Fragment } from 'react';
import ContentProjectsUser from '../ContentProjectsUser/ContentProjectsUser';
import './officeUserContent.scss';
import { useState } from 'react';
import classnames from 'classnames'

const OfficeUserContent = () => {
    const [btn, changeBtn] = useState(true);
    const [firstActiveBTn, setFirstActiveBTn] = useState(true);
    const [secondActiveBTn, setSecondActiveBTn] = useState(false)

    const showAndSearchProjects = (e) => {
        if(e.target.id === "btn-2") {
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
                <button id="btn-1" className={classnames('content__btn content__btn_yellow', {'content__btn_yellow_active': firstActiveBTn})} onClick={showAndSearchProjects}>My Projects</button>
                <button id="btn-2" className={classnames('content__btn content__btn_yellow', {'content__btn_yellow_active': secondActiveBTn})} onClick={showAndSearchProjects}>Search Projects</button>
            </div>
            <ContentProjectsUser btn={btn}/>
        </Fragment>
    )
}

export default OfficeUserContent;