import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Home'
import About from './About'
import Product from './Product'
import Customer from './Customer'
import Seller from './Seller'
import Data from './Data'
import DataLayout from './DataLayout'
import ProductDetail from './ProducDetail'
import Image from './Image'
import NoteFound from './NotFound'
import ProductSearch from './ProductSearch'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/images/*" element={<Image />} />
        <Route path="/data" element={<DataLayout />}>
          <Route index element={<Data />} />
          <Route path="products" element={<Product />} />
          <Route path="products/search" element={<ProductSearch />} />
          <Route path="customers" element={<Customer />} />
          <Route path="sellers" element={<Seller />} />
          <Route path="products/:id" element={<ProductDetail />} />
        </Route>
        <Route path="/*" element={<NoteFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
