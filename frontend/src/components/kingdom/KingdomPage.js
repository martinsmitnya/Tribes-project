import React from 'react';
import Buildings from '../buildings/Buildings';
import Header from '../header/Header';
import Menu from '../menu/Menu';
import Resources from '../resource/Resource';
import Troops from '../troops/Troops';
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
        <Troops />
      </Route>
    </div>
  );
}

export default KingdomPage;