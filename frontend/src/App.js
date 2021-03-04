import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotImplemented from './components/notImplemented/NotImplemented';
import RegisterPage from './components/register/RegisterPage';
import Login from './components/login/LoginForm';
import Resources from './components/resource/Resource';
import Buildings from './components/buildings/Buildings';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/resource">
            <Resources />
          </Route>
          <Route path="/buildings">
            <Buildings />
          </Route>
          <Route path="/">
            <NotImplemented />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
