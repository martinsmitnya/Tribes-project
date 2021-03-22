import React, { useEffect, useState } from 'react';
import Fetch from '../fetch/Fetch';
import { useSelector, useDispatch } from 'react-redux';

function Troops() {
  const dispatch = useDispatch();
  const troops = useSelector(state => state.troopsReducer.troops);
  const stats = useSelector(state => state.troopsReducer.stats);
  const levels = useSelector(state => state.troopsReducer.levels);
  const isLoaded = useSelector(state => state.troopsReducer.isLoaded);
  const error = useSelector(state => state.troopsReducer.error);
  const [element, setElement] = useState(null);

  const test =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2NyIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMn0.Nr70kjGqR3NgAM1rnsTeYYI6DQmKtOlUpzePZQsg9Wo';
  let token = JSON.parse(atob(test.split('.')[1]));
  if (localStorage.getItem('token')) {
    token = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
  }

  useEffect(() => {
    Fetch('GET', '/kingdom/troops', '', token)
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
    return <div className="troops_container"> Error: {error.message} </div>;
  } else if (!isLoaded) {
    return <div className="troops_container"> Loading... </div>;
  } else {
    return (
      <div>
        <div>Attack: {stats.attack}</div>
        <div>Defence: {stats.defence}</div>
        <div>Sustenance: {stats.sustenance}</div>
        <div>{levels[0]} Troop Level 1</div>
        <div>{levels[1]} Troop Level 2</div>
        <div>{levels[2]} Troop Level 3</div>
      </div>
    );
  }
}

export default Troops;
