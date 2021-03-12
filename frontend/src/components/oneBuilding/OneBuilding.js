import React, { useState } from 'react';
import Description from './Description';
import BasicInfo from './BasicInfoBox';
import farm from '../../icons/farm.png';
import mine from '../../icons/mine.png';
import townhall from '../../icons/townhall_1.png';
import academy from '../../icons/academy.png';
import Fetch from '../fetch/Fetch';

function OneBuilding(buildingID) {

  const [type, setType] = useState(null);
  const [level, setLevel] = useState(null);
  const [buildingId, setBuildingId] = useState(buildingID);
  //let type = '';
  //let level = '';
  //setBuldingId(buildingID);

  Fetch('GET', `/kingdom/buildings/${buildingID}`)
    .then(result => {
      setBuildingId(result.bulding_id);
      setType(result.type);
      setLevel(result.level);
    })
    .catch(error => {
      console.log(error.message);
    })

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

  return (
    <div className="oneBuilding">
      <BasicInfo src={getImage(type)} type={type} level={level}/>
      <Description description={"Ez itt a description"}/>
    </div>
  )
}

export default OneBuilding;