import { useEffect, useState } from 'react'
import privateApi from './apis/config'
import { endpoints } from './apis/endpoints'

function App() {
  const [count, setCount] = useState('')

  const getData = async () => {
    const data = await privateApi.get(endpoints.current)
    setCount(data)
  } 

  useEffect(() => {
    getData()
  },[])

  return (
   <></>
  )
}

export default App
