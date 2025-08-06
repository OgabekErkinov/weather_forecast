import { useState } from 'react'
import privateApi from './apis/config'
import { endpoints } from './apis/endpoints'

function App() {
  const [count, setCount] = useState('')

  const getData = async () => {
    const data = await privateApi.get(endpoints.current)
    setCount(datas)

  } 

  return (
   <></>
  )
}

export default App
