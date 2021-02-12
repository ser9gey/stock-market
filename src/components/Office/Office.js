import './office.scss';
import OfficeUserLeftBar from '../OfficeUserLeftBar/OfficeUserLeftBar';
import OfficeCompanyLeftBar from '../OfficeCompanyLeftBar/OfficeCompanyLeftBar';

import OfficeUserContent from '../OfficeUserContent/OfficeUserContent';
import OfficeCompanyContent from '../OfficeCompanyContent/OfficeCompanyContent';

const user = true;

const Office = () => {
    return (
        <div className="office">
            <div className="office__wrapp">
                <div className="office-profile">
                {user
                    ? <OfficeUserLeftBar />
                    : <OfficeCompanyLeftBar />
                }
                </div>
                <div className="office-content">
                {user
                    ? <OfficeUserContent />
                    : <OfficeCompanyContent />
                }
                </div>
            </div>   
        </div>
    )
}

export default Office;