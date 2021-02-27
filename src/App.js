import {useEffect} from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Home from "./components/Home/Home";
import {auth} from './firebase';
import Office from './components/Office/Office';
import { useDispatch } from 'react-redux';
import addUser from '../src/actions/addUser'

import {dataBase} from './firebase';

const App = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      console.log(user);

      try {
        dataBase.ref('profiles/' + user.uid).once('value')
        .then( snapshot => {
          dispatch(addUser(snapshot.val()));  
        })
        .then( ()=> {
          history.push("/office");
      })
      } catch (error) {
        
      }
    })
  })

  return (
    <Switch>
      <Route path="/office" component={Office} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default App;