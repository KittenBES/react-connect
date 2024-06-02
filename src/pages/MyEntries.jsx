import Service from '../Components/Service';
import '../CSS/MyEntries.css';
import '../CSS/ServisInfo.scss';

import '../CSS/Service.scss';

import Addressimg from '../assets/service-address.svg';
import Workerimg from '../assets/worker.png';

const MyEntries = () => {
  let dates = new Date(2026, 4, 15);
  return (
    <>
      <main>
        <div class='page'>
          <div class='left'>
            <Service name='Парикмахер' price='2500' date={dates.toString()} time='15:30' />
          </div>
          <div class='center'></div>
          <div class='right'>
            {/* <div class="service"> */}
            <div class='servinfo'>
              <p class='service__name'>Имя услуги</p>
              <p class='servinfo__details service__p'>Стрижка</p>
              <div class='service__price service__p'>2500 ₽</div>
              <div class='servinfo__worker'>
                <img src={Workerimg} />
                <div class='servinfo__worker-info'>
                  <p>Мастер:</p>
                  <p class='service__p'>Bиталий</p>
                  <div href='+79457883654'>+7 945 788 36 54</div>
                </div>
              </div>
              <div class='service__bot'>
                <div class='service__bot_left'>
                  <p class='service__date service__p'>15.05.24</p>
                  <div class='service__time service__p'>15:30</div>
                </div>
                <div class='service__bot_right'>
                  <img src={Addressimg} />
                  <div class='service__address service__p'>ул. Ленина 22</div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default MyEntries;
