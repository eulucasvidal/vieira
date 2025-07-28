import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/home/header/header'
import Footer from './components/home/footer/footer'
import Produtos from './components/home/pages/produtos/produtos'
import PaginaProduto from './components/home/pages/paginaProduto/paginaProduto'



function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='produtos' element={<Produtos/>}/>
        <Route path='produto/:slug' element={<PaginaProduto/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
