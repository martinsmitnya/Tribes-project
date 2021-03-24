import React from 'react';
import Buildings from '../buildings/Buildings';
import Header from '../header/Header';
import Menu from '../menu/Menu';
import Resources from '../resource/Resource';
import Troops from '../troops/Troops';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './KingdomPage.css'

const KingdomPage = () => {

  return (
    <div className='kingdom-page-container'>
      <Header />
      <div className='kingdom-page-main-container'>
        <div className='menu-resources-container'>
          <Menu />
          <Resources />
        </div>
        <div className='main-content-container'>
          <Route path="/kingdom/buildings">
            <Buildings />
          </Route>
          <Route path="/kingdom/troops">
            <Troops />
          </Route>
        </div>
      </div>
    </div>
  );
}

export default KingdomPage;
