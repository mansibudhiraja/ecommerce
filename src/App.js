
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import Header from './components/Header'
import Register from './components/Register'
import useToken from './components/useToken'
import Navigation from './components/Navigation'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const {token, removeToken, setToken} = useToken()

  return (
  <>
  <Navigation />
 
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/navigation" element={<Navigation/>} />
          <Route path ="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
  </>
);
}


export default App;
