import {useState} from 'react';
import {auth} from '../../firebase';
import { useHistory } from 'react-router-dom';

export const SignInFields = ({isLoginFormActive}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    let className = "home-content__form-fields";

    if(isLoginFormActive) {
        className = "home-content__form-fields";
    } else {
        className += " home-content__form-fields_active";
    }

    async function signIn() {
        console.log(email, password);
        const user = await auth.signInWithEmailAndPassword(email, password);
        console.log(user);
        history.push("/office");
    }

    return (
        <div className={className}>
            <input className="home-content__form-fields-input" placeholder="Email" type="email" required value={email} onChange={e => setEmail(e.target.value)}></input>
            <input className="home-content__form-fields-input" placeholder="Password" type="password" required value={password} onChange={e => setPassword(e.target.value)}></input>
            <button type="submit" className="home-content__form-fields-btn" onClick={signIn}>Enter</button>
        </div>
    )
}