import {useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import {auth} from './firebase';
import UsersMainPage from './components/UsersMainPage/UsersMainPage'

const App = () => {

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      console.log(user);
    })
  }, [])
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/persons" component={UsersMainPage} />
    </Switch>
  );
}

export default App;