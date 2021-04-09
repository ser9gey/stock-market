import './office.scss';
import { useSelector } from 'react-redux';
import { OfficeUserLeftBar, OfficeCompanyLeftBar, OfficeUserContent, OfficeCompanyContent, Loader } from '../Office';

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