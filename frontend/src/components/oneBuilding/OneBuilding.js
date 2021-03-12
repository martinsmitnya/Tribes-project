import React, { useState } from 'react';
import Description from './Description';
import BasicInfo from './BasicInfoBox';
import farm from '../../icons/farm.png';
import mine from '../../icons/mine.png';
import townhall from '../../icons/townhall_1.png';
import academy from '../../icons/academy.png';
import Fetch from '../fetch/Fetch';

function OneBuilding(element) {
  //setBuldingId(buildingID);

  /*Fetch('GET', `/kingdom/buildings/${buildingID}`)
    .then(result => {
      buildingID = result.bulding_id;
      type = result.type;
      level = result.level;
    })
    .catch(error => {
      console.log(error.message);
    });*/

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
      <BasicInfo
        src={getImage(element.type)}
        type={element.type}
        level={element.level}
      />
      <Description description={'Ez itt a description'} />
    </div>
  );
}

export default OneBuilding;
