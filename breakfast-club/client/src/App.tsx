import {useState, useEffect} from 'react';
import {
  Routes,
  Route,
  useLocation
} from "react-router-dom"

import Tetris from './pages/tetris';
import TopNavbar from './components/navbar';
function App() {
  const [profile, setProfile]: any = useState(null)
  const location = useLocation();
  return (
    <>
      <header>
        <TopNavbar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={
            <Tetris />
          }/>
        </Routes>
      </main>
    </>
  );
}

export default App;
