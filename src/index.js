import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import { rootReducer } from "./reducers/rootReducer";
import { BrowserRouter } from 'react-router-dom';
import './firebase';
import logger from 'redux-logger'

export const MyContext = React.createContext();

const store = createStore(rootReducer, applyMiddleware(logger))

store.subscribe(() => {
  console.log( store.getState() );
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MyContext.Provider value={store}>
          <App />
        </MyContext.Provider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
