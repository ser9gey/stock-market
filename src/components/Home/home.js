import '../Home/_Home.scss';
import logo from "../../images/home/1.png";
import { Switch, Route, Link } from 'react-router-dom';
import { UsersForm } from "../UsersForm/UsersForm";
import { CompanyForm } from "../CompanyForm/CompanyForm";
import { useState } from 'react';

const Home = () => {

  
  const [isLogin, setIsLogin] = useState(true);

  const changeFieldsForm = (e) => {
    let target = e.target;
    setIsLogin(target.id === "logIn");
  }

  return (
    <div className="home">
      <div className="container">
        <div className="home-header">
          <div className="home-header__logo">
            <img className="home-header__images" alt="test" src={logo}></img>
          </div>
          <div className="home-header__btns">
            <Link to="/auth/users" data-btn="users" className="home-header__btn">For Users</Link>
            <Link to="/auth/company" data-btn="company" className="home-header__btn">For Company</Link>
          </div>
        </div>
        <div className="home-content">
          <section className="home-content__description">
            <h1 className="home-content__description-title">Welcome to Us</h1>
            <p className="home-content__description-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
          </section>
          <Switch>
            <Route path="/auth/users" render={() => (<UsersForm state={isLogin} changeFieldsForm = { changeFieldsForm } />)} />
            <Route path="/auth/company" render={() => (<CompanyForm state={isLogin} changeFieldsForm = { changeFieldsForm } />)} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Home;