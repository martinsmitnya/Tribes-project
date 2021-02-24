import React, { useEffect, useState } from 'react';

const port = process.env.PORT;
console.log(process.env);
console.log(port);

function Resources() {
  const [food, setFood] = useState(null);
  const [gold, setGold] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(0);

  const fetchResources = async () => {
    const call = await fetch(`${process.env.REACT_APP_PORT}/kingdom/resource`);
    const result = await call.json();
    setFood(result[0]);
    setGold(result[1]);
    setIsLoaded(true);
  };

  useEffect(() => {
    fetchResources();
  }, [user]);

  function Generation(generation) {
    if (generation > 0) {
      return '+';
    } else if (generation < 0) {
      return '-';
    }
  }

  if (error) {
    return <div> Error: {error.message} </div>;
  } else if (!isLoaded) {
    return <div> Loading... </div>;
  } else {
    return (
      <div className="formWrapper">
        <ul>
          <li>Food: {food.amount}</li>
          <li>
            {Generation(food.generation)}
            {food.generation} / minute
          </li>
        </ul>
        <ul>
          <li>Gold: {gold.amount}</li>
          <li>
            {Generation(gold.generation)}
            {gold.generation} / minute
          </li>
        </ul>
      </div>
    );
  }
}

export default Resources;
