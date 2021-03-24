import React, { useEffect, useState } from 'react';
import './Troops.css';
import Fetch from '../fetch/Fetch';
import { useSelector, useDispatch } from 'react-redux';
import troopMainLogo from '../../icons/troopMainLogo.png';
import troopRoundedLogo from '../../icons/Asset_9.png';
import coin from '../../icons/better_coin.png';

function Troops() {
  const dispatch = useDispatch();
  const troops = useSelector(state => state.troopsReducer.troops);
  const stats = useSelector(state => state.troopsReducer.stats);
  const levels = useSelector(state => state.troopsReducer.levels);
  const isLoaded = useSelector(state => state.troopsReducer.isLoaded);
  const error = useSelector(state => state.troopsReducer.error);

  useEffect(() => {
    Fetch(
      'GET',
      '/kingdom/troops',
      '',
      JSON.parse(atob(localStorage.getItem('token').split('.')[1]))
    )
      .then(result => {
        dispatch({ type: 'GET_TROOPS', troops: result });
        return getLevels();
      })
      .catch(error => {
        return dispatch({ type: 'ERROR', error: error.toString() });
      });
  }, [isLoaded]);

  function getLevels() {
    let troopsLevels = [0, 0, 0];
    let troopsStats = { attack: 0, defence: 0, sustenance: 0 };
    troops.map(element => {
      troopsLevels[element.level - 1] += 1;
      troopsStats.attack += element.attack;
      troopsStats.defence += element.defence;
      troopsStats.sustenance += element.sustenance;
    });
    dispatch({ type: 'SET_LEVELS', levels: troopsLevels });
    dispatch({ type: 'SET_STATS', stats: troopsStats });
  }
  if (error) {
    return <div className="troops-container"> Error: {error.message} </div>;
  } else if (!isLoaded) {
    return <div className="troops-container"> Loading... </div>;
  } else {
    return (
      <div className="troops-container">
        <div className="troops-stats">
          <img
            className="troops-mainLogo"
            src={troopMainLogo}
            alt="Troop Logo"
          ></img>
          <div>Attack: {stats.attack}</div>
          <div>Defence: {stats.defence}</div>
          <div>Sustenance: {stats.sustenance}</div>
        </div>
        <div className="troops-levels">
          <div className="troops-levelBox">
            <div className="troops-levelButton">
              <img
                className="troops-roundedLogo"
                src={troopRoundedLogo}
                alt="Troop Logo Rounded"
              ></img>
              <div>
                <div className="troops-levelNumber">{levels[0]}</div> Troop
                Level 1
              </div>
            </div>
            <div className="troops-levelUpgrade">
              <div>Upgrade </div>
              <div>
                130 <img src={coin} className="troops-coin" alt="Gold"></img>
              </div>
            </div>
          </div>

          <div className="troops-levelBox">
            <div className="troops-levelButton">
              <img
                className="troops-roundedLogo"
                src={troopRoundedLogo}
                alt="Troop Logo Rounded"
              ></img>
              <div>
                <div className="troops-levelNumber">{levels[1]}</div> Troop
                Level 2
              </div>
            </div>
            <div className="troops-levelUpgrade">
              <div>Upgrade </div>
              <div>
                160 <img src={coin} className="troops-coin" alt="Gold"></img>
              </div>
            </div>
          </div>
          <div className="troops-levelButton">
            <img
              className="troops-roundedLogo"
              src={troopRoundedLogo}
              alt="Troop Logo Rounded"
            ></img>
            <div>
              <div className="troops-levelNumber">{levels[2]}</div> Troop Level
              3
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Troops;
