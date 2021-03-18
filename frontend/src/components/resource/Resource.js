import React, { useEffect } from 'react';
import Fetch from '../fetch/Fetch';
import './Resource.css';
import farm from '../../icons/svg/buildings/farm.svg';
import mine from '../../icons/svg/buildings/mine.svg';
import bread from '../../icons/better_bread.png';
import coin from '../../icons/better_coin.png';
import { useSelector, useDispatch } from "react-redux";

function Resources() {

  const dispatch = useDispatch();
  const food = useSelector(state => state.resourceReducer.food);
  const gold = useSelector(state => state.resourceReducer.gold);
  const isLoaded = useSelector(state => state.resourceReducer.isLoaded);
  const error = useSelector(state => state.resourceReducer.error);
  const user = useSelector(state => state.resourceReducer.user);

  useEffect(() => {
    Fetch('GET', '/kingdom/resource')
      .then(result => {
        return dispatch({type: 'GET_RESOURCES', food: result[0], gold: result[1]})
      })
      .catch(error => {
        return dispatch({type: 'ERROR', error: error.toString()})
      });
  }, [user]);

  function Generation(item, class_name) {
    if (item.generation > 0) {
      class_name = ' pos';
      return <div className={class_name}>+{item.generation} / minute</div>;
    } else if (item.generation < 0) {
      class_name = ' neg';
      return <div className={class_name}>{item.generation} / minute</div>;
    } else {
      return <div className={class_name}>{item.generation} / minute</div>;
    }
  }

  if (error) {
    return <div className="resources"> Error: {error.message} </div>;
  } else if (!isLoaded) {
    return <div className="resources"> Loading... </div>;
  } else {
    return (
      <div className="resources">
        <div className="building farm">
          <img src={farm} alt="farm"></img>
        </div>
        <div className="textR food">
          {food.amount} <img className="bread" alt="bread" src={bread}></img>
        </div>
        {Generation(food, 'foodgen')}

        <div className="building mine">
          <img src={mine} alt="mine"></img>
        </div>
        <div className="textR gold">
          {gold.amount}
          <img className="coins" alt="coin" src={coin}></img>
        </div>
        {Generation(gold, 'goldsgen')}
      </div>
    );
  }
}

export default Resources;
