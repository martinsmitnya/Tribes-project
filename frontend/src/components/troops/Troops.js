import React, { useEffect, useState } from 'react';
import Fetch from '../fetch/Fetch';
import { useSelector, useDispatch } from 'react-redux';

function Troops() {
  const dispatch = useDispatcsh();
  const troops = useSelector(state => state.troopsReducer.troops);
  const stats = useSelector(state => state.troopsReducer.stats);
  const levels = useSelector(state => state.troopsReducer.levels);
  const isLoaded = useSelector(state => state.troopsReducer.isLoaded);
  const error = useSelector(state => state.troopsReducer.error);
  const [element, setElement] = useState(null);

  const test =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjciLCJuYW1lIjoiSm9obiBEb2UiLCJpYXQiOjE1MTYyMzkwMjJ9.xqud7wQ0FPvOT6WT9wJVj7goze6_zyluwS8GBIdml9Y';

  const token = JSON.parse(atob(test.split('.')[1]));

  useEffect(() => {
    Fetch('GET', '/kingdom/troops', '', token)
      .then(result => {
        return dispatch({ type: 'GET_TROOPS', troops: result });
      })
      .catch(error => {
        return dispatch({ type: 'ERROR', error: error.toString() });
      });
  }, [isLoaded]);

  getLevels(){
      let troopsLevels = [0,0,0,0,0,0];
      let troopsStats= {attack:0, defence:0, sustenance: 0};
      troops.map(element => {
          troopsLevels[element.level-1] += 1;
          troopsStats.attack += element.attack;
          troopStats.defence += element.defence;
          troopStats.sustenance += element.sustenance;
      })
      
  }

  if (error) {
    return <div className="troops_container"> Error: {error.message} </div>;
  } else if (!isLoaded) {
    return <div className="troops_container"> Loading... </div>;
  } else {
    return (
      <div>
        {troops.map(element => {
          console.log(element);
          return <div className="oneTroops">{element.level}</div>;
        })}
      </div>
    );
  }
}

export default Troops;
