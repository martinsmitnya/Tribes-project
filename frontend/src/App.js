import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './Components/Login/Login'

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      </Switch>
    </Router>
  )
}

export default App;
