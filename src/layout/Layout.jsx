import Routing from '../routing/Routing'
import { season_picture } from '../utils/season';
import Alert_Window from '../widgets/Alert_Window';

const Layout = () => {
  return (
    <div
      className="h-[100vh] w-[100vw] flex justify-center items-center p-2 bg-center bg-cover"
      style={{ backgroundImage: `url(${season_picture()})` }}
    >
      <Routing />
    </div>
  );
};

export default Layout;
