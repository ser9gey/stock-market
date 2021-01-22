import '../Home/_Home.scss';
import logo from "../../images/home/1.png"

const ShowForm = (e) => {
  console.log(e.target)
}

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home-header">
          <div className="home-header__logo">
            <img className="home-header__images" alt="test" src={logo}></img>
          </div>
          <div className="home-header__btns">
            <button className="home-header__btn home-header__btn_active" onClick={ShowForm}>For Users</button>
            <button className="home-header__btn" onClick={ShowForm}>For Company</button>
          </div>
        </div>
        <div className="home-content">
          <section className="home-content__description">
            <h1 className="home-content__description-title">Welcome to Us</h1>
            <p className="home-content__description-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
         </p>
          </section>
          <form className="home-content__form home-content__form_active">
            <div className="home-content__form-tabs">
              <button className="home-content__form-btn home-content__form-btn_active">Sign In</button>
              <button className="home-content__form-btn">Log In</button>
            </div>
            <div className="home-content__form-fields">
              <input className="home-content__form-fields-input" placeholder="Name" required></input>
              <input className="home-content__form-fields-input" placeholder="Password" required></input>
              <button className="home-content__form-fields-btn">Send</button>
            </div>
          </form>
          <form className="home-content__form">
            <div className="home-content__form-tabs">
              <button className="home-content__form-btn home-content__form-btn_active">Sign In</button>
              <button className="home-content__form-btn">Log In</button>
            </div>
            <div className="home-content__form-fields">
              <input className="home-content__form-fields-input" placeholder="Name" required></input>
              <input className="home-content__form-fields-input" placeholder="Password" required></input>
              <button className="home-content__form-fields-btn">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
  
export default Home;