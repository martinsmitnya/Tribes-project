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
  const [buildingCount, setBuildingCount] = useState(0);

  const fetchBuildings = async () => {
    const call = await fetch(`${process.env.REACT_APP_PORT}/kingdom/buildings`);
    const result = await call.json();
    if (call.ok) {
      console.log(result);
      setBuildingCount(result.length);
      setBuildings(result);
    } else {
      setError(result);
    }
    setIsLoaded(true);
  };

  useEffect(() => {
    fetchBuildings();
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
    if (type === 'farm') {
      return { type: 'farm', hp: 100, end: 60 };
    } else if (type === 'mine') {
      return { type: 'mine', hp: 100, end: 60 };
    } else if (type === 'academy') {
      return { type: 'academy', hp: 150, end: 90 };
    }
  }

  function postBuilding(type) {
    const body = addBuilding(type);
    console.log(body);
    fetch(`${process.env.REACT_APP_PORT}/kingdom/buildings/newBuilding`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then(response => response.json())
      .then(result => {
        if (result.status === 200) {
          setBuildingCount(buildingCount + 1);
        }
      })
      .catch(err => console.log(err));
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
            onClick={() => postBuilding('farm')}
          ></img>
          <label className="textB">Add Farm</label>
        </div>
        <div>
          <img
            className="imgB"
            src={addMine}
            alt="Add Mine"
            onClick={() => postBuilding('mine')}
          ></img>
          <label className="textB">Add Mine</label>
        </div>
        <div>
          <img
            className="imgB"
            src={addAcademy}
            alt="Add Academy"
            onClick={() => postBuilding('academy')}
          ></img>
          <label className="textB">Add Academy</label>
        </div>
      </div>
    );
  }
}

export default Buildings;
