import {useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import {auth} from './firebase';
import Office from './components/Office/Office';

const App = () => {

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      console.log(user);
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