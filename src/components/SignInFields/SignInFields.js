import {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {auth} from '../../firebase';

export const SignInFields = ({isLoginFormActive}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function signIn() {
        console.log(email, password);
        const respons = await auth.signInWithEmailAndPassword(email, password);
        console.log(respons);
        history.push("/office");
    }

    return (
        <div className={`home-content__form-fields ${isLoginFormActive ? "home-content__form-fields" : " home-content__form-fields_active"}`}>
            <input className="home-content__form-fields-input" placeholder="Email" type="email" required value={email} onChange={e => setEmail(e.target.value)}></input>
            <input className="home-content__form-fields-input" placeholder="Password" type="password" required value={password} onChange={e => setPassword(e.target.value)}></input>
            <button type="submit" className="home-content__form-fields-btn" onClick={signIn}>Enter</button>
        </div>
    )
}