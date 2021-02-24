import React from 'react';
import NotImplemented from './components/notImplemented/NotImplemented';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <NotImplemented />
          </Route>
        </Switch>
      </div>
    </Router> 
  );
}

export default App;
