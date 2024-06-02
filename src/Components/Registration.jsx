import '../CSS/Registration.scss';

import Google from '../assets/google.svg';
import Vk from '../assets/vk-logo.svg';
import Img from '../assets/registrationImg.png';

function Registration(props) {
  const bekService = 'http://93.95.97.167:8083'

  

  return (
    <>
      <form>
        <div className='registration'>
          <img src={Img} className='registration__img' />
          <div className='registration__form'>
            <h1>Регистрация</h1>
            <p>Ваше имя</p>
            <input type='text' name='first_name' placeholder='Имя' required></input>
            <p>Ваша почта</p>
            <input type='email' name='email' placeholder='@mail.ru' required></input>
            <p>Пароль</p>
            <input
              type='password'
              name='pin'
              placeholder='Пароль'
              inputmode='numeric'
              required
            ></input>
            <a>
              <img class='item' src={Google} />
            </a>
            <a>
              <img class='item' src={Vk} />
            </a>
            <button>Регистрация</button>
            <div className='ask'>
              <p class='ask__p'>Уже есть аккаунт?</p>
              <a>Войти</a>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Registration;
