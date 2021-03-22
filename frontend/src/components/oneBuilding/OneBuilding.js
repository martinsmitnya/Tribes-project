import React from 'react';
import './OneBuilding.css'
import BasicInfo from './BasicInfoBox';
import farm from '../../icons/farm.png';
import mine from '../../icons/mine.png';
import townhall from '../../icons/townhall_1.png';
import academy from '../../icons/academy.png';
import MineDescription from './MineDescription';
import FarmDescription from './FarmDescription';
import TownhallDescription from './TownhallDescription';
import AcademyDescription from './AcademyDescription';

function OneBuilding(element) {

  function getDescription(type) {
    if (type === 'farm') {
      return <FarmDescription/>;
    }
    if (type === 'townhall') {
      return <TownhallDescription/>;
    }
    if (type === 'academy') {
      return <AcademyDescription/>;
    }
    if (type === 'mine') {
      return <MineDescription/>;
    }
    console.log(element.type);
  }

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
      <div className="descriptionBoxWithButtons">
        {getDescription(element.type)}
      </div>
    </div>
  );
}

export default OneBuilding;
