import React from 'react';
import Description from './Description';
import BasicInfo from './BasicInfoBox';
import mine from '../../icons/mine.png';
import townhall from '../../icons/townhall_1.png';

function OneBuilding(props) {
  //const [type, setType] = useState('');
  //useState: type és level
  //fetch:
  //.then response.type = setType? vagy type=response.type?



  return (
    <div className="oneBuilding">
      <BasicInfo src={townhall} type={"townhall"} level={1}/>
      <Description description={"Ez itt a description"}/>
    </div>
  )
}

export default OneBuilding;