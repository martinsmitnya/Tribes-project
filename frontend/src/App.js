import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotImplemented from './components/notImplemented/NotImplemented';
import RegisterPage from './components/register/RegisterPage';
import Resources from './components/resource/Resource';
import Buildings from './components/buildings/Buildings';
import SettingsBlock from './components/settings/SettingsBlock';
import LoginPage from './components/login/LoginPage';
import SettingsPage from './components/settings/SettingsPage';
import Header from './components/header/Header';

function App() {
  return (
    <Router>
          <Header />
      <div className="App">
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/resource">
            <Resources />
          </Route>
          <Route path="/settings">
            <SettingsPage />
          </Route>
          <Route path="/buildings">
            <Buildings />
          </Route>
          <Route path="/header">
            <Header />
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