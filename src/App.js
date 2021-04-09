import { Switch, Route } from 'react-router-dom';
import Home from "./pages/HomePage/Home/home";
import Office from './pages/Office/Office/Office';
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