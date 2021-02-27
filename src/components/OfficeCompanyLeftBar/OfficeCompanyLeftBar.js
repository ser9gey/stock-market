import { Fragment } from 'react';
import company from '../../images/officeCompany/company.png';
import {auth} from '../../firebase';
import { useHistory } from 'react-router-dom';

const OfficeCompanyLeftBar = () => {

    const history = useHistory();

    const companyLogout = () => {
        auth.signOut().then(() => {
            history.push("/company");
        }).catch((error) => {
            console.log("Error");
        });
    }

    return (
        <Fragment>
            <div className="office-profile__header">
                <div className="office-profile__header-logo">
                    <img className="office-profile__header-ava" src={company} alt="company" />
                </div>
                <div className="office-profile__header-btns">
                    <button className="office-profile__header-btn" onClick={companyLogout}>Logout</button>
                    <button className="office-profile__header-btn">Edit</button>
                </div>
            </div>
            <div className="office-profile__content">
                <p className="office-profile__content-info">About Us:</p>
                <p className="office-profile__content-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cum optio nostrum sed consequuntur omnis eius velit nobis voluptas fugiat! In neque ipsa doloribus quae molestias odio provident ea nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cum optio nostrum sed consequuntur omnis eius velit nobis voluptas fugiat! In neque ipsa doloribus quae molestias odio provident ea nihil</p>
                <button className="office-profile__content-btn">Add Project</button>
            </div>
        </Fragment>
    )
}

export default OfficeCompanyLeftBar;