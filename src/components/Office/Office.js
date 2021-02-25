import './office.scss';
import OfficeUserLeftBar from '../OfficeUserLeftBar/OfficeUserLeftBar';
import OfficeCompanyLeftBar from '../OfficeCompanyLeftBar/OfficeCompanyLeftBar';
import OfficeUserContent from '../OfficeUserContent/OfficeUserContent';
import OfficeCompanyContent from '../OfficeCompanyContent/OfficeCompanyContent';
import { useContext } from 'react';
import { MyContext } from '../../index';
import { useHistory } from 'react-router-dom';

const Office = () => {
    const history = useHistory();
    const value = useContext(MyContext).getState();

    if(value.addUser.role === undefined) {
        history.push("/users")
    }

    return (
        <div className="office">
            <div className="office__wrapp">
                <div className="office-profile">
                {(value.addUser.role === "user")
                    ? <OfficeUserLeftBar />
                    : <OfficeCompanyLeftBar />
                }
                </div>
                <div className="office-content">
                {(value.addUser.role === "user")
                    ? <OfficeUserContent />
                    : <OfficeCompanyContent />
                }
                </div>
            </div>  
        </div>
    )
}

export default Office;