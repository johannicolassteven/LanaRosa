import ProductsPage from './Pages/Products'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <Router>
    <Navbar/>
    <div>Lana Rosa</div>
    <ProductsPage/>
    <Routes>
    <Route path='/products' element={<ProductsPage/>} />
    </Routes>
  
  </Router>
  )
}

export default App
