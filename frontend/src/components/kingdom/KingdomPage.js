import React from 'react';
import Buildings from '../buildings/Buildings';
import Header from '../header/Header';
import Menu from '../menu/Menu';
import Resources from '../resource/Resource';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const KingdomPage = () => {

  return (
    <div>
      <Header />
      <Menu />
      <Resources />
      <Route path="/kingdom/buildings">
        <Buildings />
      </Route>
      <Route path="/kingdom/troops">
        {/* <Troops /> majd ha kész lesz */}
      </Route>
    </div>
  );
}

export default KingdomPage;