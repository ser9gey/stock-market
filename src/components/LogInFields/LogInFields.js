import {useState} from 'react';
import { useDispatch} from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import {auth, dataBase} from '../../firebase';
import addUser from '../../actions/addUser';
import classnames from 'classnames'

export const LogInFields = ({isLoginFormActive}) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const path = useRouteMatch();
    const dispatch = useDispatch();

    async function logIn() {
        console.log(email, password);
        const respons = await auth.createUserWithEmailAndPassword(email, password);

        await dataBase.ref('profiles/' + respons.user.uid).set({
            name: "",
            surname: "",
            profession: "",
            skills: "",
            level: "",
            email: email,
            role: path.path.includes("users") ? "user" : "company",
            uid: respons.user.uid,
            info: "",
        })
        
        await dataBase.ref('profiles/' + respons.user.uid).once('value')
            .then( snapshot => dispatch(addUser(snapshot.val())))
            .then( ()=> history.push("/office"))

    }

    return (
        <div className={classnames( 'home-content__form-fields', { ' home-content__form-fields_active': isLoginFormActive})}>
            <input className="home-content__form-fields-input" placeholder="Email" type="email" required value={email} onChange={e => setEmail(e.target.value)}></input>
            <input className="home-content__form-fields-input" placeholder="Password" type="password" required value={password} onChange={e => setPassword(e.target.value)}></input>
            <button type="submit" className="home-content__form-fields-btn" onClick={logIn}>Log in</button>
        </div>
    )
}