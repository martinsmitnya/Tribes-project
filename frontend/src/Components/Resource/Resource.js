import React, { useEffect, useState } from 'react';

function Resources() {
  const [food, setFood] = useState(null);
  const [gold, setGold] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/kingdom/resource')
      .then(res => res.text())
      .then(
        result => {
          setIsLoaded(true);
          console.log(result);
        },
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  });

  if (error) {
    return <div> Error: {error.message} </div>;
  } else if (!isLoaded) {
    return <div> Loading... </div>;
  } else {
    return <div> Sikers </div>;
  }
}

export default Resources;
