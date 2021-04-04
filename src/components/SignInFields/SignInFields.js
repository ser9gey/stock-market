import {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {auth} from '../../firebase';
import classnames from 'classnames';

export const SignInFields = ({isLoginFormActive}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    // async function signIn() {
    //     console.log(email, password);
    //     const respons = await auth.signInWithEmailAndPassword(email, password);
    //     console.log(respons);
    //     history.push("/office");
    // }

    let [error, setError] = useState('');

    async function signIn() {
        console.log(email, password);
        await auth.signInWithEmailAndPassword(email, password)
        .then(respons => {
            console.log(respons);
            setError('')
            history.push("/office");
        })
        .catch(err => {
            setError("User not found. Please enter correct email address and password")
        }) 
    }

    return (
        <div className={classnames('home-content__form-fields', { ' home-content__form-fields_active': !isLoginFormActive})}>
            <input className="home-content__form-fields-input" placeholder="Email" type="email" required value={email} onChange={e => setEmail(e.target.value)} />
            <input className="home-content__form-fields-input" placeholder="Password" type="password" required value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit" className="home-content__form-fields-btn" onClick={signIn}>Log In</button>
            <p className="home-content__form-fields-error">{error}</p>
        </div>
    )
}