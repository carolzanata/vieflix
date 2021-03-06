import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import ErrorPage from './pages/ErrorPage';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
  <Route path="/cadastro/video" component={CadastroVideo}/>
  <Route path="/cadastro/categoria" component={CadastroCategoria}/>
  <Route path="/" component={App} exact />
  <Route component={ErrorPage}/>
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
