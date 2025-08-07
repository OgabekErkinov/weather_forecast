import { season_picture } from './utils/season';
import Layout from './layout/Layout'

function App() {

  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center p-2 bg-center bg-cover"
         style={{ backgroundImage: `url(${season_picture().gif})` }}>
          <Layout/>
       </div>
  );
}

export default App;
