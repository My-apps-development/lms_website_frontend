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
import Category from './Pages/Courses/Category';
import Courses from './Pages/Courses/Courses';
import ProtectedWrapper from './Utils/ProtectedWrapper';

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
        <Route path='/category' element={<ProtectedWrapper><Category /></ProtectedWrapper>}/>
        <Route path='/category/courses' element={<ProtectedWrapper><Courses /></ProtectedWrapper>}/>
        <Route path='/library' element={<ProtectedWrapper><Library /></ProtectedWrapper>}/>
        <Route path='/assessment' element={<ProtectedWrapper><Assessment /></ProtectedWrapper>}/>
        <Route path='/assessment/quiz' element={<ProtectedWrapper><StartQuiz /></ProtectedWrapper>}/>
        <Route path='/video/view/:id' element={<ProtectedWrapper><VideoView /></ProtectedWrapper>}/>
        <Route path='/profile' element={<ProtectedWrapper><Profile /></ProtectedWrapper>}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
