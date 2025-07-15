import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/login/Login'
import Dashboard from './components/dashboard/Dashboard'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
    </>
  )
}

export default App
