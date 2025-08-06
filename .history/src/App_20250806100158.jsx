import { useState } from 'react'
import privateApi from './apis/config'

function App() {
  const [count, setCount] = useState(0)

  getData = async privateApi.get()

  return (
   <></>
  )
}

export default App
