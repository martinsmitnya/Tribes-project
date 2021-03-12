import React from 'react';
function BasicInfo(props) {
  
  return (
    <div className="BasicInfoContainer">
      <img
      className="oneBuildingImg"
      src={props.src}
      alt={props.type}>
      </img>
      <p>{props.type}</p>
      <p>{props.level}</p>
    </div>
  )
}

export default BasicInfo;