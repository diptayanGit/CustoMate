import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Shop from './pages/Shop';
import Category from './pages/Category';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/men' element={<Category category='men'/>} />
          <Route path='/women' element={<Category category='women'/>} />
          <Route path='/kids' element={<Category category='kid'/>} />
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>} />
          </Route>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;