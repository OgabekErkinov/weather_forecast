import React from 'react'
import SearchPanel from './searchPanel'
import { useNavigate } from 'react-router'

const Header = () => {
    const navigate = useNavigate()
  return (
    <header className='w-full flex justify-between items-center mb-4'>

        {/* search panel for insert country name and searching */}
        <SearchPanel/>

        {/* current season title in here */}
        <h2>
            Winter
        </h2>

        {/* settings button : link to settings page */}
        <button onClick={()=>navigate('/settings')}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            ⚙️ Settings
          </button>


    </header>
  )
}

export default Header