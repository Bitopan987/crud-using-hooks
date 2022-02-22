import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Components/style/style.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EditUser from './Components/EditUser';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/" exact>
        <App />
      </Route>
      <Route path="/edit/:id" component={EditUser} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
