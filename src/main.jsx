import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Home'
import About from './About'
import Product from './Product'
import Costumer from './Costumer'
import Seller from './Seller'
import Data from './Data'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/data">
          <Route index element={<Data />} />
          <Route path="products" element={<Product />} />
          <Route path="costumers" element={<Costumer />} />
          <Route path="sellers" element={<Seller />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
