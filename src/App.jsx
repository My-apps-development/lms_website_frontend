import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard'
import Login from './Pages/Authentication/Registerr'
import { useEffect } from 'react';
import Aos from 'aos';

import 'aos/dist/aos.css';
import Library from './Pages/Library/Library';
import VideoView from './Pages/Video/VideoView';
import Assessment from './Pages/Assessment/Assessment';
import StartQuiz from './Pages/Assessment/StartQuiz';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './Pages/Profile/Profile';
import Register from './Pages/Authentication/Login';
import ProfileStepper from './Pages/Authentication/ProfileStepper';

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
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/register' element={<Login />}/>
        <Route path='/login' element={<Register />}/>
        <Route path='/register/profile' element={<ProfileStepper />}/>
        <Route path='/library' element={<Library />}/>
        <Route path='/assessment' element={<Assessment />}/>
        <Route path='/assessment/quiz' element={<StartQuiz />}/>
        <Route path='/video/view' element={<VideoView />}/>
        <Route path='/profile' element={<Profile />}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
