import SearchPanel from './SearchPanel'
import SettingsButton from '../common/Settings_button'
import { season_picture } from '../utils/season'
import useMode from '../states/modeState'

const Header = () => {
  const { textMode } = useMode()
  return (
    <header className='w-full flex justify-between items-center mb-4'>

        {/* search panel for insert country name and searching */}
        <SearchPanel/>

        {/* current season title in here */}
        <h2 style={{color : textMode}}
            className='text-2xl font-bold italic hidden md:block'>
            {
              season_picture().title
            }
        </h2>

        {/* settings button : link to settings page */}
        <SettingsButton/>
        
    </header>
  )
}

export default Header