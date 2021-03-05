import React, { useEffect, useState } from 'react';
import './Resource.css';
import farm from '../../icons/svg/buildings/farm.svg';
import mine from '../../icons/svg/buildings/mine.svg';
import bread from '../../icons/better_bread.png';
import coin from '../../icons/better_coin.png';

function Resources() {
  const [food, setFood] = useState(null);
  const [gold, setGold] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(0);

  const fetchResources = async () => {
    const call = await fetch(`${process.env.REACT_APP_PORT}/kingdom/resource`);
    const result = await call.json();
    if (call.ok) {
      console.log(result);
      setFood(result[0]);
      setGold(result[1]);
    } else {
      setError(result);
    }
    setIsLoaded(true);
  };

  useEffect(() => {
    fetchResources();
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
