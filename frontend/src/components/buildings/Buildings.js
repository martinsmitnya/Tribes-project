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
import { useSelector, useDispatch } from 'react-redux';
import OneBuilding from '../oneBuilding/OneBuilding';

function Buildings() {
  const dispatch = useDispatch();
  const buildings = useSelector(state => state.buildingReducer.buildings);
  const isLoaded = useSelector(state => state.buildingReducer.isLoaded);
  const error = useSelector(state => state.buildingReducer.error);
  const buildingCount = useSelector(
    state => state.buildingReducer.buildingCount
  );
  const [element, setElement] = useState(null);

  useEffect(() => {
    Fetch(
      'GET',
      '/kingdom/buildings',
      '',
      JSON.parse(atob(localStorage.getItem('token').split('.')[1]))
    )
      .then(result => {
        return dispatch({ type: 'GET_BUILDINGS', buildings: result });
      })
      .catch(error => {
        return dispatch({ type: 'ERROR', error: error.toString() });
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
    Fetch(
      'POST',
      '/kingdom/buildings/newBuilding',
      body,
      JSON.parse(atob(localStorage.getItem('token').split('.')[1]))
    )
      .then(result => {
        return dispatch({ type: 'INCREASE_BUILDING_COUNT' });
      })
      .catch(err => alert(err));
  }

  if (error) {
    return <div className="buildings-container"> Error: {error.message} </div>;
  } else if (!isLoaded) {
    return <div className="buildings-container"> Loading... </div>;
  } else if (element) {
    return (
      <div>
        <OneBuilding level={element.level} type={element.type} />
      </div>
    );
  } else {
    return (
      <div className="buildings-container">
        {buildings.map(element => {
          return (
            <div className='building-tile'>
              <img
                className="buildings-img"
                src={getImage(element.type)}
                alt={element.type}
                //Itt kell onClick varázslat
                onClick={() => setElement(element)}
              ></img>
              <label className="buildings-text">
                {element.type} <br />
                Level {element.level}
              </label>
            </div>
          );
        })}
        <div>
          <img
            className="buildings-img"
            src={addFarm}
            alt="Add Farm"
            onClick={() => addBuilding('farm')}
          ></img>
          <label className="buildings-text">Add Farm</label>
        </div>
        <div>
          <img
            className="buildings-img"
            src={addMine}
            alt="Add Mine"
            onClick={() => addBuilding('mine')}
          ></img>
          <label className="buildings-text">Add Mine</label>
        </div>
        <div>
          <img
            className="buildings-img"
            src={addAcademy}
            alt="Add Academy"
            onClick={() => addBuilding('academy')}
          ></img>
          <label className="buildings-text">Add Academy</label>
        </div>
      </div>
    );
  }
}

export default Buildings;
