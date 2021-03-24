import React, { useEffect } from 'react';
import Fetch from '../fetch/Fetch';
import './Resource.css';
import farm from '../../icons/svg/buildings/farm.svg';
import mine from '../../icons/svg/buildings/mine.svg';
import bread from '../../icons/better_bread.png';
import coin from '../../icons/better_coin.png';
import { useSelector, useDispatch } from 'react-redux';

function Resources() {
  const dispatch = useDispatch();
  const food = useSelector(state => state.resourceReducer.food);
  const gold = useSelector(state => state.resourceReducer.gold);
  const isLoaded = useSelector(state => state.resourceReducer.isLoaded);
  const error = useSelector(state => state.resourceReducer.error);
  const buildingCount = useSelector(
    state => state.buildingReducer.buildingCount
  );

  useEffect(() => {
    Fetch(
      'GET',
      '/kingdom/resource',
      '',
      JSON.parse(atob(localStorage.getItem('token').split('.')[1]))
    )
      .then(result => {
        return dispatch({
          type: 'GET_RESOURCES',
          food: result[0],
          gold: result[1],
        });
      })
      .catch(error => {
        return dispatch({ type: 'ERROR', error: error.toString() });
      });
  }, [buildingCount]);

  function Generation(item, class_name) {
    if (item.generation > 0) {
      class_name = ' resource-pos';
      return <div className={class_name}>+{item.generation} / minute</div>;
    } else if (item.generation < 0) {
      class_name = ' resource-neg';
      return <div className={class_name}>{item.generation} / minute</div>;
    } else {
      return <div className={class_name}>{item.generation} / minute</div>;
    }
  }

  if (error) {
    return <div className="resources-container"> Error: {error.message} </div>;
  } else if (!isLoaded) {
    return <div className="resources*-container"> Loading... </div>;
  } else {
    return (
      <div className="resources-container">
        <div className="resource-building resource-farm">
          <img src={farm} alt="arm"></img>
        </div>
        <div className="resource-text resource-food">
          {food.amount}{' '}
          <img className="resource-bread" alt="bread" src={bread}></img>
        </div>
        {Generation(food, 'resource-foodgen')}

        <div className="resource-building resource-mine">
          <img src={mine} alt="mine"></img>
        </div>
        <div className="resource-text resource-gold">
          {gold.amount}
          <img className="resource-coins" alt="coin" src={coin}></img>
        </div>
        {Generation(gold, 'resource-goldsgen')}
      </div>
    );
  }
}

export default Resources;
