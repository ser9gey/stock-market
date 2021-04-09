import {useState} from 'react';
import { useDispatch} from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import {auth} from '../../../core/api/firebase';
import classnames from 'classnames';
import {addUser, createdUser} from '../LogInFields';

export const LogInFields = ({isLoginFormActive}) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPasword, setErrorPasword] = useState('');
    const [formValid, setFormValid] = useState('');
    const history = useHistory();
    const path = useRouteMatch();
    const dispatch = useDispatch();

    async function logIn() {

        if ((!email || !password) || (errorEmail || errorPasword)) { setFormValid("Data wrong. Enter correct data"); }
        else {
            setFormValid("");
            const respons = await auth.createUserWithEmailAndPassword(email, password);
            try {
                await createdUser(respons.user.uid, email, path.path)
                .then(snapshot => dispatch(addUser(snapshot.val())))
                .then(() => history.push("/office"))
            } catch (error) {
                console.log(error)
            }  
        }
    }

    const validationEmail = (e) => {

        setEmail(e.target.value);
        if (!/[\w]+@[\w]+\.[\w]+/.test(e.target.value)) { 
            setErrorEmail('Data wrong. Please enter correct email');
            if(e.target.value === '') { setErrorEmail('Email is empty'); }
        } else { setErrorEmail(''); }  
    }

    const validationPassword = (e) => {

        setPassword(e.target.value); 
        if (e.target.value.length < 5) { 
            setErrorPasword('Password must be more 4 symbols');
            if(e.target.value === '') { setErrorPasword('Password is empty'); }
        }
        else { setErrorPasword(''); }
    }

    return (
        <div className={classnames( 'home-content__form-fields', { ' home-content__form-fields_active': isLoginFormActive})}>
            <input className="home-content__form-fields-input" placeholder="Email" type="email" required value={email} onChange={e => validationEmail(e)} />
            <p className="home-content__form-fields-error">{errorEmail}</p>
            <input className="home-content__form-fields-input" placeholder="Password" type="password" required value={password} onChange={e => validationPassword(e)} />
            <p className="home-content__form-fields-error">{errorPasword}</p>
            <button type="button" className="home-content__form-fields-btn" onClick={logIn}>Enter</button>
            <p className="home-content__form-fields-error">{formValid}</p>
        </div>
    )
}