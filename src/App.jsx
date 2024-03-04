import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard'
import Login from './Pages/Authentication/Login'
import { useEffect } from 'react';
import Aos from 'aos';

import 'aos/dist/aos.css';
import Library from './Pages/Library/Library';
import VideoView from './Pages/Video/VideoView';
import Assessment from './Pages/Assessment/Assessment';

function App() {

  Aos.init({
    easing: 'ease-in-out', 
  });

  useEffect(() => {
    Aos.refresh(); 
  }, []);
 

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/library' element={<Library />}/>
        <Route path='/assessment' element={<Assessment />}/>
        <Route path='/video/view' element={<VideoView />}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
