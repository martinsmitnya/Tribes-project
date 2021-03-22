import React, { useEffect, useState } from 'react';
import Fetch from '../fetch/Fetch';
import { useSelector, useDispatch } from 'react-redux';

function Troops() {
  const dispatch = useDispatch();
  const troops = useSelector(state => state.troopsReducer.troops);
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
