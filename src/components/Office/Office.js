import './office.scss';
import OfficeUserLeftBar from '../OfficeUserLeftBar/OfficeUserLeftBar';
import OfficeCompanyLeftBar from '../OfficeCompanyLeftBar/OfficeCompanyLeftBar';
import OfficeUserContent from '../OfficeUserContent/OfficeUserContent';
import OfficeCompanyContent from '../OfficeCompanyContent/OfficeCompanyContent';
import { useSelector } from 'react-redux';


import Loader from '../Loader/Loader';

const Office = () => {
    const userProfile = useSelector(state => state);

    return (
        <div className="office">
            {userProfile.profile.role === undefined || null
                ? <Loader />
                : <div className="office__wrapp">
                    <div className="office-profile">
                        {(userProfile.profile.role === "user")
                            ? <OfficeUserLeftBar />
                            : <OfficeCompanyLeftBar />
                        }
                    </div>
                    <div className="office-content">
                        {(userProfile.profile.role === "user")
                            ? <OfficeUserContent />
                            : <OfficeCompanyContent />
                        }
                    </div>
                </div>  
            }  
        </div>
    )
}

export default Office;