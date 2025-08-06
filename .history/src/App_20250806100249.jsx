import { useState } from 'react'
import privateApi from './apis/config'
import { endpoints } from './apis/endpoints'

function App() {
  const [count, setCount] = useState('')

  const getData = async () => {
    const datas = await privateApi.get(endpoints.current)
    setCount

  } 

  return (
   <></>
  )
}

export default App
