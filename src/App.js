import { Switch, Route, Link } from 'react-router-dom';
import Home from "./components/Home/home";

const App = () => {
  return (
    <div>
    <Link to="/home">sfs</Link>
    <Switch>
      <Route exact path="/home" component={Home} />
    </Switch>
    </div>
  );
}

export default App;