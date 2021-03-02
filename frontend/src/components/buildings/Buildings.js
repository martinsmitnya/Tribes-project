import React, { useEffect, useState } from 'react';
import './Buildings.css';
import farm from '../../icons/farm.png';
import mine from '../../icons/mine.png';
import townhall from '../../icons/townhall_1.png';
import academy from '../../icons/academy.png';
import addAcademy from '../../icons/addacademy.png';
import addFarm from '../../icons/addfarm.png';
import addMine from '../../icons/addmine.png';

function Buildings() {
  const [buildings, setBuildings] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(0);

  const fetchResources = async () => {
    const call = await fetch(`${process.env.REACT_APP_PORT}/kingdom/buildings`);
    const result = await call.json();
    if (call.ok) {
      console.log(result);
      setBuildings(result);
    } else {
      setError(result);
    }
    setIsLoaded(true);
  };

  function getImage(type) {
    if (type === 'farm') {
      return farm;
    } else if (type === 'townhall') {
      return townhall;
    } else if (type === 'academy') {
      return academy;
    } else if (type === 'mine') {
      return mine;
    }
  }

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
    return <div className="buildings"> Error: {error.message} </div>;
  } else if (!isLoaded) {
    return <div className="buildings"> Loading... </div>;
  } else {
    return (
      <div className="buildings">
        {buildings.map(element => {
          console.log(element);
          return (
            <div>
              <img src={getImage(element.type)} alt={element.type}></img>
              <label className="text">
                {element.type} Level {element.level}
              </label>
            </div>
          );
        })}
        <div>
          <img src={addFarm} alt="Add Farm"></img>
          <label className="text">Add Farm</label>
        </div>
        <div>
          <img src={addMine} alt="Add Mine"></img>
          <label className="text">Add Mine</label>
        </div>
        <div>
          <img src={addAcademy} alt="Add Academy"></img>
          <label className="text">Add Academy</label>
        </div>
      </div>
    );
  }
}

export default Buildings;
