import React, { useEffect, useState } from 'react';
import Fetch from '../fetch/Fetch';
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
  const [buildingCount, setBuildingCount] = useState(0);

  useEffect(() => {
    Fetch('GET', '/kingdom/buildings').then(result => {
      setBuildings(result);
      setIsLoaded(true);
    });
  }, [buildingCount]);

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

  function addBuilding(type) {
    let body = {};
    if (type === 'farm') {
      body = { type: 'farm', hp: 100, end: 60, price: 100 };
    } else if (type === 'mine') {
      body = { type: 'mine', hp: 100, end: 60, price: 100 };
    } else if (type === 'academy') {
      body = { type: 'academy', hp: 150, end: 90, price: 150 };
    }
    Fetch('POST', '/kingdom/buildings/newBuilding', body).then(result => {
      if (result.status === 200) {
        setBuildingCount(buildingCount + 1);
      } else {
        alert(result.error);
      }
    });
  }

  if (error) {
    return <div className="buildings"> Error: {error.message} </div>;
  } else if (!isLoaded) {
    return <div className="buildings"> Loading... </div>;
  } else {
    return (
      <div className="buildings">
        {buildings.map(element => {
          return (
            <div>
              <img
                className="imgB"
                src={getImage(element.type)}
                alt={element.type}
              ></img>
              <label className="textB">
                {element.type} <br />
                Level {element.level}
              </label>
            </div>
          );
        })}
        <div>
          <img
            className="imgB"
            src={addFarm}
            alt="Add Farm"
            onClick={() => addBuilding('farm')}
          ></img>
          <label className="textB">Add Farm</label>
        </div>
        <div>
          <img
            className="imgB"
            src={addMine}
            alt="Add Mine"
            onClick={() => addBuilding('mine')}
          ></img>
          <label className="textB">Add Mine</label>
        </div>
        <div>
          <img
            className="imgB"
            src={addAcademy}
            alt="Add Academy"
            onClick={() => addBuilding('academy')}
          ></img>
          <label className="textB">Add Academy</label>
        </div>
      </div>
    );
  }
}

export default Buildings;
