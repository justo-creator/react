import { useState, useEffect } from 'react'
import Api from './api/Api'
import './style/App.css'
import Datos from './api/Datos'

function App() {

  const [datos, setDatos] = useState([])
  useEffect(() => {
    Api().then(data => setDatos(data))
    
  }, [])

  

  return (
    <>


    <header className='header-container'>
      <h1 className='title'>Rick and Morty</h1>
      <a href="#">Watch Caps</a>
    </header>
        
        <Datos datos={datos} />
     
    </>
  )
}

export default App
