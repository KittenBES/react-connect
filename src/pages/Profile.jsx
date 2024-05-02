import { useState } from 'react'
import ProfilePhoto from '../assets/profile.png'
import Google from '../assets/google.svg'
import Vk from '../assets/vk-logo.svg'
import '../App.css'
import '../CSS/Profile.css'

function Profile() {
  
  return (
      <>
        <main>
            <h1>Редактировать профиль</h1>
            <div class="content">
            <img class="content--porfile" src={ProfilePhoto}></img>
            <form>
                <p>Ваше имя</p>
                <input type="text" name="first_name" placeholder='Марина' required></input>
                <p>Ваша фамилия</p>
                <input type="text" name="last_name" placeholder='Иванова' required></input>
                <p>Ваша почта</p>
                <input type="email" name="email" placeholder='marina@rte.rw' required></input>
                <p>Связанные аккаунты</p>
                <a><img class="item" src={Google}></img></a>
                <a><img class="item" src={Vk}></img></a>
                <p>Новый пароль</p>
                <input type="password" name="pin" placeholder='********' inputmode="numeric" required></input>
                <p>Подтверждение пароля</p>
                <input type="password" name="pin-dubl" placeholder='********' inputmode="numeric" required></input>
                <button>Сохранить изменения</button>
                <button class="button--delete">Удалить профиль</button>
            </form>
            </div>
        </main>
      </>
    )
}

export default Profile