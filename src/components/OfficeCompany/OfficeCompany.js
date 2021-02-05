import '../OfficeCompany/_OfficeCompany.scss';
import company from '../../images/officeCompany/company.png';

const OfficeCompany = () => {
    return (
        <div className="office-company">
            <div className="office-company__wrapp">
                <div className="office-company-left-bar">
                    <div className="office-company-left-bar__header">
                        <div className="office-company-left-bar__header-logo">
                            <img className="office-company-left-bar__header-ava" src={company} alt="company"/>
                        </div>
                        <div className="office-company-left-bar__header-btns">
                            <button className="office-company-left-bar__header-btn">Logout</button>
                            <button className="office-company-left-bar__header-btn">Edit</button>
                        </div>
                    </div>
                    <div className="office-company-left-bar__content">
                        <p className="office-company-left-bar__content-info">About Us:</p>
                        <p className="office-company-left-bar__content-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cum optio nostrum sed consequuntur omnis eius velit nobis voluptas fugiat! In neque ipsa doloribus quae molestias odio provident ea nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cum optio nostrum sed consequuntur omnis eius velit nobis voluptas fugiat! In neque ipsa doloribus quae molestias odio provident ea nihil</p>
                    </div>
                    <div className="office-company-left-bar__footer">
                        <button className="office-company-left-bar__footer-btn">Create Projects</button>
                    </div>
                </div>
                <div className="office-company-right-bar">
                    <h2 className="office-company-right-bar__title">Requests</h2>
                    <div className="office-company-right-bar__projects">
                        <div className="office-company-right-bar__projects-card">
                            <p className="office-company-right-bar__projects-card-text">Name of project: </p>
                            <p className="office-company-right-bar__projects-card-text">Name user: </p>
                            <p className="office-company-right-bar__projects-card-text">Profession of the user: </p>
                            <p className="office-company-right-bar__projects-card-text">User skills: </p>
                            <p className="office-company-right-bar__projects-card-text">User skills level: </p>
                        </div>

                        <div className="office-company-right-bar__projects-card">
                            <p className="office-company-right-bar__projects-card-text">Name of project: </p>
                            <p className="office-company-right-bar__projects-card-text">Name user: </p>
                            <p className="office-company-right-bar__projects-card-text">Profession of the user: </p>
                            <p className="office-company-right-bar__projects-card-text">User skills: </p>
                            <p className="office-company-right-bar__projects-card-text">User skills level: </p>
                        </div>

                        <div className="office-company-right-bar__projects-card">
                            <p className="office-company-right-bar__projects-card-text">Name of project: </p>
                            <p className="office-company-right-bar__projects-card-text">Name user: </p>
                            <p className="office-company-right-bar__projects-card-text">Profession of the user: </p>
                            <p className="office-company-right-bar__projects-card-text">User skills: </p>
                            <p className="office-company-right-bar__projects-card-text">User skills level: </p>
                        </div>

                        <div className="office-company-right-bar__projects-card">
                            <p className="office-company-right-bar__projects-card-text">Name of project: </p>
                            <p className="office-company-right-bar__projects-card-text">Name user: </p>
                            <p className="office-company-right-bar__projects-card-text">Profession of the user: </p>
                            <p className="office-company-right-bar__projects-card-text">User skills: </p>
                            <p className="office-company-right-bar__projects-card-text">User skills level: </p>
                        </div>
                        
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default OfficeCompany;