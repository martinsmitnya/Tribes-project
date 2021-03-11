
function BasicInfo(props) {
  
  return (
    <div className="BasicInfoContainer">
      <img
      className="typeImg"
      src={getImage(props.type)}
      alt={props.type}>
      </img>
      <p>{type}</p>
      <p>{level}</p>
    </div>
  )
}

export default BasicInfo;