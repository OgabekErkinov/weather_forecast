import { useState } from 'react'
import privateApi from './apis/config'
import { endpoints } from './apis/endpoints'

function App() {
  const [count, setCount] = useState(0)

  const getData = async () privateApi.get(endpoints.current)

  return (
   <></>
  )
}

export default App
