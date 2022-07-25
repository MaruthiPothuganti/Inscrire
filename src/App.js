import './App.css';
import {useLocation} from 'react-router-dom'
import { AllRoutes } from './Pages/AllRoutes';
import { SideNav, Navbar,NoteModal } from './Components';
import {useNotes} from './Context/NoteContext'


function App() {
const { isNoteModalOpen, setNoteModal } = useNotes();
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
        <AllRoutes className="w-full" />

        <NoteModal
        handleClose={() => setNoteModal(false)}
        show={isNoteModalOpen}
      />
        </div>
  </div>
  );
}

export default App;
