import axios from 'axios';
import React, { useEffect, useState } from 'react';

const src = 'http://93.95.97.167:8081/all';

const Test = () => {
  const [services, setServise] = useState([]);

  useEffect(() => {
    axios.get(src).then((data) => {
      console.log(data);
    });
  }, []);

  return <h1>Test</h1>;
};

export default Test;
