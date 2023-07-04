import ProductsPage from './Pages/Products'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'

function App() {
  
  return (
    <Router>
    <Navbar/>
    <Sidebar/>
    <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/about' element={<AboutPage/>} />
    <Route path='/products' element={<ProductsPage/>} />
    </Routes>
  
  </Router>
  )
}

export default App
