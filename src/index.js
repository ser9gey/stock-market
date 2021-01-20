import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import { rootReducer } from "./reducers/rootReducer";
import { loadState, saveState } from "./localStorage/localStorage";
import { BrowserRouter } from 'react-router-dom';

/*LocalStorage*/
const persistedState = loadState();

/*Store*/                              /*Initial State*/
const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  saveState(store.getState());
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
