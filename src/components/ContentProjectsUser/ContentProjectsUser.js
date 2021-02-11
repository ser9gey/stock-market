import AllProjects from '../AllProjects/AllProjects';
import ContentProjectsUserCard from '../ContentProjectsUserCard/ContentProjectsUserCard';

const ContentProjectsUser = ({btn}) => {
    return (
        <div className="content__projects">
            {btn
                ?<ContentProjectsUserCard/>
                :<AllProjects />
            }
            
        </div>
    )
}

export default ContentProjectsUser;
