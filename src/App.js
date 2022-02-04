
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import Header from './components/Logout'
import Logout from './components/Logout'
import Register from './components/Register'
import useToken from './components/useToken'
import Navigation from './components/Navigation'
import HomeScreen from './components/screens/homescreen'
import ProductScreen from './components/screens/ProductScreen'
import Footer from './components/footer'


import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {

  const {token, removeToken, setToken} = useToken()

  return (
  <>
    <BrowserRouter>
    <div className="d-flex flex-column site-container">
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomeScreen/>} />
          <Route path="/product/:slug" element={<ProductScreen />} />
        </Routes>
       
      </main>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/navigation" element={<Navigation/>} />
          <Route path ="/register" element={<Register />} />
          <Route path ="/logout" element={<Logout />} />
        </Routes>
      <footer>
        <Footer />
      </footer>
      </div>
      </BrowserRouter>
    
  </>
);
}


export default App;
