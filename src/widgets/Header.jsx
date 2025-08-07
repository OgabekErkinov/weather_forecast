import SearchPanel from './searchPanel'
import SettingsButton from '../common/Settings_button'

const Header = () => {
  return (
    <header className='w-full flex justify-between items-center mb-4'>

        {/* search panel for insert country name and searching */}
        <SearchPanel/>

        {/* current season title in here */}
        <h2 className='text-2xl font-bold italic text-blue-600 hidden md:block'>
            Winter
        </h2>

        {/* settings button : link to settings page */}
        <SettingsButton/>
        
    </header>
  )
}

export default Header