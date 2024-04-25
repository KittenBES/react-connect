import { useState } from 'react'
import HeaderList from './assets/header-list.svg'
import HeaderLike from './assets/header-like.svg'
import Profile from './assets/profile.png'
import './App.css'
import './Header.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div class="header--left">
          <a class="header--left--logo">Connect</a>
          <div class="header--left--city">Томск</div>
        </div>
        <div class="header--right">
          <p class="header--rigft--status">No business</p>
          <a><img src={HeaderList}></img></a>
          <a><img src={HeaderLike}></img></a>
          <a><img class="header--right--profile" src={Profile} ></img></a>
        </div>
      </header>
      <main>
        <h1>Редактировать профиль</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
      </main>
      <footer></footer>
    </>
  )
}

export default App
