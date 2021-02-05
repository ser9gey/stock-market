import {useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from "./components/Home/Home";
import {auth} from './firebase';
import OfficeUser from './components/OfficeUser/OfficeUser';
import OfficeCompany from './components/OfficeCompany/OfficeCompany';
import AllProjects from './components/AllProjects/AllProjects';

const App = () => {

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      console.log(user);
    })
  }, [])

  return (
    <Switch>
      <Route path="/office-user" component={OfficeUser} />
      <Route path="/office-company" component={OfficeCompany} />
      <Route path="/all-projects" component={AllProjects} />
      <Route path="/auth" component={Home} />
      <Redirect to="/auth/users" />
    </Switch>
  );
}

export default App;