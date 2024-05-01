import { useState } from 'react'
import Header from './Components/Header'
import Profile from './assets/profile.png'
import './CSS/Profile.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <h1>Редактировать профиль</h1>
        <div class="content">
          <img class="content--porfile" src={Profile}></img>
          <form>
            <p>Ваше имя</p>
            <input type="text" name="first_name" placeholder='Марина' required></input>
            <p>Ваша фамилия</p>
            <input type="text" name="last_name" placeholder='Иванова' required></input>
            <p>Ваша почта</p>
            <input type="email" name="email" placeholder='marina@rte.rw' required></input>
            <p>Связанные аккаунты</p>
            <p>Новый пароль</p>
            <input type="password" name="pin" placeholder='********' inputmode="numeric" required></input>
            <p>Подтверждение пароля</p>
            <input type="password" name="pin-dubl" placeholder='********' inputmode="numeric" required></input>
            <button>Сохранить изменения</button>
            <button class="button--delete">Удалить профиль</button>
          </form>
        </div>
      </main>
      <footer></footer>
    </>
  )
}

export default App
