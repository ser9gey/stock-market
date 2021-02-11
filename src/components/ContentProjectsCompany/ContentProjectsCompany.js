import AllProjects from "../AllProjects/AllProjects";
import ContentProjectsCompanyCard from '../ContentProjectsCompanyCard/ContentProjectsCompanyCard';

const ContentProjectsCompany = ({btn}) => {
    return (
        <div className="content__projects">
            {btn
                ?<ContentProjectsCompanyCard />
                :<AllProjects />
            }  
        </div>
    )
}

export default ContentProjectsCompany;