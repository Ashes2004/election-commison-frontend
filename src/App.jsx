
import { Newspaper, UserCheck } from 'lucide-react'
import CardContainer from './components/CardComponets'
import Carousel from './components/Carousel'
import ElectionCommission from './components/ElectionCommisions'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import NewsTabs from './components/NewsData'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AuthPage from './pages/AuthPage'
import ArticlePage from './pages/Article'
import AboutPage from './pages/About'

function App() {
  
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<AuthPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/articles' element={<ArticlePage/>}/>
    </Routes>
  )
}

export default App
