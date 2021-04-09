import {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {auth} from '../../../core/api/firebase';
import classnames from 'classnames';

export const SignInFields = ({isLoginFormActive}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPasword, setErrorPasword] = useState('');
    const [formValid, setFormValid] = useState('');
    const [userError, setUserError] = useState('');
    const history = useHistory();

    async function signIn() {

        if((!email || !password) || (errorEmail || errorPasword)) { setFormValid("Data wrong. Enter correct data"); }
        else {
            setFormValid("");
            await auth.signInWithEmailAndPassword(email, password)
            .then(respons => {
                setUserError('')
                history.push("/office");
            })
            .catch(err => {
                setUserError("User not found. Please enter correct email address and password")
            }) 
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
        <div className={classnames('home-content__form-fields', { ' home-content__form-fields_active': !isLoginFormActive})}>
            <input className="home-content__form-fields-input" placeholder="Email" name="email" type="email" required value={email} onChange={e => validationEmail(e)} />
            <p className="home-content__form-fields-error">{errorEmail}</p>
            <input className="home-content__form-fields-input" placeholder="Password" name="password" type="password" required value={password} onChange={e => validationPassword(e)} />
            <p className="home-content__form-fields-error">{errorPasword}</p>
            <button type="button" className="home-content__form-fields-btn" onClick={signIn}>Log In</button>
            <p className="home-content__form-fields-error">{formValid}</p>
            <p className="home-content__form-fields-error">{userError}</p>
        </div>
    )
}