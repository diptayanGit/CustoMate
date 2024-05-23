import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Shop from './pages/Shop';
import Category from './pages/Category';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Footer from './components/Footer';
import men_banner from './components/Assets/banner_men.png'
import women_banner from './components/Assets/banner_women.png'
import kids_banner from './components/Assets/banner_kids.png'
import Signup from './components/Signup';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/men' element={<Category banner={men_banner} category='men'/>} />
          <Route path='/women' element={<Category banner={women_banner} category='women'/>} />
          <Route path='/kids' element={<Category banner={kids_banner} category='kids'/>} />
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>} />
          </Route>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;