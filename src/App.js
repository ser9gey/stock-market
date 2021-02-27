import { Switch, Route } from 'react-router-dom';
import Home from "./components/Home/home";
import Office from './components/Office/Office';
import { UserProvider } from '../src/providers/UserProvider';

const App = () => {

  return (
    <UserProvider>
      <Switch>
        <Route path="/office" component={Office} />
        <Route path="/" component={Home} />
      </Switch>
    </UserProvider>
  );
}

export default App;