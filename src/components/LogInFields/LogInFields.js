import {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {auth} from '../../firebase';

// import {dataBase} from '../../firebase';

export const LogInFields = ({isLoginFormActive}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    let className = "home-content__form-fields";

    if(isLoginFormActive) {
        className += " home-content__form-fields_active";
    } else {
        className = "home-content__form-fields";
    }

    async function logIn() {
        console.log(email, password);
        const user = await auth.createUserWithEmailAndPassword(email, password);
        console.log(user);


        //Test
        // dataBase.ref('users/' + email).set({
        //     name: "",
        //     surname: "",
        //     profession: "",
        //     skills: "",
        //     level: "",
        //     email: email,
        //     password: password,
        //     userStatus: ""
        // })
        //Test
        

        history.push("/users");
    }

    return (
        <div className={className}>
            <input className="home-content__form-fields-input" placeholder="Email" type="email" required value={email} onChange={e => setEmail(e.target.value)}></input>
            <input className="home-content__form-fields-input" placeholder="Password" type="password" required value={password} onChange={e => setPassword(e.target.value)}></input>
            <button type="submit" className="home-content__form-fields-btn" onClick={logIn}>Log in</button>
        </div>
    )
}