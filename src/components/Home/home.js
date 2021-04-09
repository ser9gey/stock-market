import './home.scss';
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import {UsersForm, CompanyForm, HomeHeader} from '../Home';

const Home = () => {

  const [isLogin, setIsLogin] = useState(true);

  const switchingFieldsOfTheForm = (e) => {
    setIsLogin(e.target.id === "signIn");
  }

  return (
    <div className="home">
      <div className="container">
        <HomeHeader />
        <div className="home-content">
          <section className="home-content__description">
            <h1 className="home-content__description-title">Welcome to Us</h1>
            <p className="home-content__description-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
          </section>
          <Switch>
            <Route path="/users" render={() => (<UsersForm isLoginFormActive={isLogin} onLoginFormActiveChanged={switchingFieldsOfTheForm} />)} />
            <Route path="/company" render={() => (<CompanyForm isLoginFormActive={isLogin} onLoginFormActiveChanged={switchingFieldsOfTheForm} />)} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Home;