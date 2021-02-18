import {useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import {auth} from './firebase';
import Office from './components/Office/Office';

import {dataBase} from './firebase';

const App = () => {

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      console.log(user);
      console.log(dataBase);
    })
  }, [])

  return (
    <Switch>
      <Route path="/office" component={Office} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default App;