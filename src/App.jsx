import ProductsPage from './Pages/ProductsPage'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import SingleProduct from './Pages/SingleProductPage'
import Footer from './components/Footer'
import "./style.css"
import CartPage from './Pages/CartPage'

function App() {

  return (
    <Router>
    <Navbar/>
    <Sidebar/>
    <Routes >
    <Route path='/' element={<HomePage/>} />
    <Route path='/about' element={<AboutPage/>} />
    <Route path='/products' element={<ProductsPage/>} />
    <Route path='/products:/id' element={<SingleProduct/>} />
    <Route path='/cart' element={<CartPage/>} />
    </Routes>
    <Footer/>
  </Router>
  )
}

export default App
