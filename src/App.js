import './App.css';
import {useLocation} from 'react-router-dom'
import { AllRoutes } from './Pages/AllRoutes';
import { SideNav, Navbar } from './Components'

function App() {

  const {pathname} = useLocation();
  return (
    <div>
      {pathname!=="/"?<>
      <Navbar />
      <SideNav/>
      </>: null}
      <AllRoutes/>
  </div>
  );
}

export default App;
