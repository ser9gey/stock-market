import {useState} from 'react';
import {auth} from '../../firebase';

export const SignInFields = ({state}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let className = "home-content__form-fields";

    if(state) {
        className = "home-content__form-fields";
    } else {
        className += " home-content__form-fields_active";
    }

    async function signIn() {
        console.log(email, password);
        const user = await auth.signInWithEmailAndPassword(email, password);
        console.log(user);
    }

    return (
        <div className={className}>
            <input className="home-content__form-fields-input" placeholder="Email" type="email" required value={email} onChange={e => setEmail(e.target.value)}></input>
            <input className="home-content__form-fields-input" placeholder="Password" type="password" required value={password} onChange={e => setPassword(e.target.value)}></input>
            <button type="submit" className="home-content__form-fields-btn" onClick={signIn}>Enter</button>
        </div>
    )
}