import React from 'react';
import attack from '../../icons/attack1.png';
import defence from '../../icons/defence1.png';
import bread from '../../icons/bread.png';
function AcademyDescription() {
  return (
    <div className="description">
      <p>You can create troops in your Academy. The higher level your Academy is, the stronger your troops are.</p>
      <p>
        Every level increases 1 
        <img src={attack} alt="attack" className="SingleBuilding-icon" />
        and 1 
        <img src={defence} alt="defence" className="SingleBuilding-icon" />
         of the Troops.
      </p>
      <p>Every Troop eats 1 
        <img src={bread} alt="bread" className="SingleBuilding-icon" />
        every minute
      </p>
    </div>
  )
}
export default AcademyDescription;