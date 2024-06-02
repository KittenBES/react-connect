import { useState } from 'react';

import '../CSS/Service.scss';
import Addressimg from '../assets/service-address.svg';
import { useRef } from 'react';
import { useEffect } from 'react';

function Service(props) {
  const [item, setItems] = React.useState();

  fetch('http://93.95.97.167:8081/all');
  then((res) => {
    return res.json();
  });
  then((arr) => {
    setItems(arr);
  });

  const service = useRef();

  var date = new Date(props.date);

  useEffect(() => {
    const today = new Date();
    console.log(service.current.className, today, date, date.getTime() > today.getTime());
    if (date.getTime() < today.getTime()) {
      service.current.className = 'service dark-theme';
    } else {
      service.current.className = 'service';
    }
  }, []);

  return (
    <>
      <div ref={service}>
        <p class='service__name'>{props.name}</p>
        <div class='service__price service__p'>{props.price} ₽</div>
        <div class='service__bot'>
          <div class='service__bot_left'>
            <p class='service__date service__p'>
              {date.getDate()}.{date.getMonth()}.{date.getFullYear()}
            </p>
            <div class='service__time service__p'>{props.time}</div>
          </div>
          <div class='service__bot_right'>
            <img src={Addressimg} />
            <div class='service__address service__p'>ул. Ленина 22</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
