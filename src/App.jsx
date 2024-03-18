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
import NotFound from './Pages/NotFound/NotFound';
import Result from './Pages/Assessment/Result';
// import Protection from './Pages/ScreenRocordProtection.jsx/Protection';

function App() {

  Aos.init({
    easing: 'ease-in-out',
  });

  useEffect(() => {
    Aos.refresh();
  }, []);

  useEffect(() => {
    const preventDefault = (e) => {
      e.preventDefault()
    }

    document.addEventListener("contextmenu", preventDefault)

    document.addEventListener("keyup", (e) => {
      if (e.key === "PrintScreen" || e.key === "Snapshot" || e.key === "PrtScn" || e.key === "Shift") {
      
        preventDefault(e);
        alert("screen shot disabled")
   
      }
    });

  


    // const blockKeys = (e) => {
    //   if ((e.ctrlKey && e.key === 'c') || (e.ctrlKey && e.key === 'u')) {
    //     e.preventDefault();
    //   }
    // };

    // document.addEventListener('keydown', blockKeys);


    // document.addEventListener("keydown", (e) => {
    //   if (
    //     (e.ctrlKey || e.metaKey) &&
    //     e.shiftKey &&
    //     (e.key === "S" || e.key === "s" || e.keyCode === 44)
    //   ) {
    //     preventDefault(e);
    //   }

    //   if (
    //     (e.altKey || e.key === "Alt") &&
    //     (e.metaKey || e.key === "Meta") && // Check for Windows key
    //     e.key === "R"
    //   ) {
    //     preventDefault(e);
    //   }
    // });

    // document.addEventListener("keyup", (e) => {
    //   if (
    //     e.key === "PrintScreen" ||
    //     e.key === "Snapshot" ||
    //     e.key === "PrtScn"
    //   ) {
    //     preventDefault(e);
    //   }
    // });

    // const mediaDevices =
    //   navigator.mediaDevices ||
    //   (navigator.mozGetUserMedia || navigator.webkitGetUserMedia
    //     ? {
    //       getUserMedia: function (c) {
    //         return new Promise(function (y, n) {
    //           (
    //             navigator.mozGetUserMedia || navigator.webkitGetUserMedia
    //           ).call(navigator, c, y, n);
    //         });
    //       },
    //     }
    //     : null);


    // if (mediaDevices && mediaDevices.getDisplayMedia) {
    //   mediaDevices
    //     .getDisplayMedia({ video: false })
    //     .then((stream) => {
    //       alert("Screen Record Detected, Action Taken")
    //       stream.getTracks().forEach((track) => {
    //         track.stop();
    //       });
    //     })
    //     .catch((err) => {
    //       console.error("Error: " + err);
    //     });
    // }

    // return () => {
    //   document.removeEventListener("contextmenu", preventDefault);
    //   document.removeEventListener("keydown", preventDefault);
    //   document.removeEventListener("keyup", preventDefault);
    // };

  }, [])

  const handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === 'PrintScreen') {
      e.preventDefault();
      alert('Screenshots are not allowed.');
    }
  };



  return (
    <div onKeyDown={handleKeyDown}>
      <BrowserRouter>
        <ToastContainer />

        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/register' element={<Login />} />
          <Route path='/login' element={<Register />} />
          <Route path='/register/profile' element={<ProfileStepper />} />
          <Route path='/category' element={<ProtectedWrapper><Category /></ProtectedWrapper>} />
          <Route path='/category/courses' element={<ProtectedWrapper><Courses /></ProtectedWrapper>} />
          <Route path='/library' element={<ProtectedWrapper><Library /></ProtectedWrapper>} />
          <Route path='/assessment' element={<ProtectedWrapper><Assessment /></ProtectedWrapper>} />
          <Route path='/assessment/quiz' element={<ProtectedWrapper><StartQuiz /></ProtectedWrapper>} />
          <Route path='/video/view/:id' element={<ProtectedWrapper><VideoView /></ProtectedWrapper>} />
          <Route path='/profile' element={<ProtectedWrapper><Profile /></ProtectedWrapper>} />
          <Route path='/assessment/quiz/result' element={<ProtectedWrapper><Result /></ProtectedWrapper>} />
          <Route path='*' element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
