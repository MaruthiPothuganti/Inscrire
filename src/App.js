import './App.css';
import {useLocation} from 'react-router-dom'
import { AllRoutes } from './Pages/AllRoutes';
import { SideNav, Navbar } from './Components'

function App() {

  const {pathname} = useLocation();
  return (
    <div>
      {pathname!=="/"&&
        <Navbar />
      }
      <div className='flex'>
        {pathname!=="/"&&
        <SideNav/>
      }
          <AllRoutes className="w-full"/>
        </div>
  </div>
  );
}

export default App;
