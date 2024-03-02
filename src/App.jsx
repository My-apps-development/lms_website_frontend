import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard'
import Login from './Pages/Authentication/Login'

function App() {
 

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/login' element={<Login />}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
