import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './components/Home Page/HomePage'
import LoginPage from './components/Login Page/LoginPage'
import { useEffect, useState } from 'react';

function App() {

  const [isloggedIn, setIsloggedIn] = useState(false);

  useEffect(() => {
    const value = localStorage.getItem("isloggedIn");
    if (value) setIsloggedIn(true);
  }, []);

  return (
    <Routes>
      <Route path='/' element={<HomePage isloggedIn={isloggedIn} setIsloggedIn={setIsloggedIn} />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  );
}

export default App
