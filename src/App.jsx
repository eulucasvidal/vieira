import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/home/header/header'
import Products from './components/home/products/products'
import Footer from './components/home/footer/footer'
import Item from './components/common/item/item'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        
        <Products/>
      
        <Item/>
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App
