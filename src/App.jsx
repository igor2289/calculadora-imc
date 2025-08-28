import { useState } from 'react'
import Header from './components/header'
import Formulario from './components/formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Formulario />
    </>
  )
}

export default App
