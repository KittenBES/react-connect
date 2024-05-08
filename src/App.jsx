import { useState } from 'react'
import Header from './Components/Header'
import Profile from './pages/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Profile />
      <footer></footer>
    </>
    
  )
}

export default App
