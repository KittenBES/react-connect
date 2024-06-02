import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import '../CSS/Home.scss';
import GroupButton from '../Components/GpoupButton';
import CategoryCard from '../Components/CategoryCard';
import Registration from '../Components/Registration';

import Makeup from '../assets/groupicon/makeup-brush.svg';
import Doctor from '../assets/groupicon/doctor.svg';
import Sport from '../assets/groupicon/sport.png';
import Mask from '../assets/groupicon/mask.svg';
import Learn from '../assets/groupicon/learn.svg';
import Camera from '../assets/groupicon/camera.svg';
import Rent from '../assets/groupicon/rent.svg';
import Dog from '../assets/groupicon/dog.svg';
import Car from '../assets/groupicon/car.svg';
import Eat from '../assets/groupicon/eat.svg';
import Balance from '../assets/groupicon/balance-scale.svg';
import Another from '../assets/groupicon/another.svg';

const Home = () => {
  //   const { id } = useParams();
  //   const [servise, setServise] = useState<{
  //     title: string,
  //   }>();

  //   useEffect(() => {
  //     async function fetchServise() {
  //       try {
  //         const { data } = await axios.get(
  //           "http://93.95.97.167:8081/" + id
  //         );
  //         setServise(data);
  //       } catch (err) {
  //         alert(err);
  //       }
  //     }
  //     fetchServise();
  //   }, []);

  // if (!servise) {
  //   return <div>loading</div>;
  // }

  return (
    <div class='wrapper'>
      <div className='groupbox'>
        <GroupButton icon={Makeup} />
        <GroupButton icon={Doctor} />
        <GroupButton icon={Sport} />
        <GroupButton icon={Mask} />
        <GroupButton icon={Learn} />
        <GroupButton icon={Camera} />
        <GroupButton icon={Rent} />
        <GroupButton icon={Dog} />
        <GroupButton icon={Car} />
        <GroupButton icon={Eat} />
        <GroupButton icon={Balance} />
        <GroupButton icon={Another} />
      </div>
      <h2>Категории</h2>

      {/* {this.arr.map((serv) => (
        <li key={serv.id}>
          <CategoryCard name={serv.title}></CategoryCard>
        </li>
      ))} */}
      <Registration />
    </div>
  );
};

export default Home;
