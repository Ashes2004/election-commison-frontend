
import { Newspaper, UserCheck } from 'lucide-react'
import CardContainer from './components/CardComponets'
import Carousel from './components/Carousel'
import ElectionCommission from './components/ElectionCommisions'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import NewsTabs from './components/NewsData'

function App() {
  
  return(
    <div >
    <Navbar/>
    <Carousel/>
    <div className="w-screen h-auto  flex flex-row  bg-gray-200">
        <div className='w-1/6 bg-pink-200 h-10 hover:bg-blue-200 text-pink-800  font-semibold flex justify-center align-center text-md gap-x-2 pt-2 '><UserCheck/><h2>Myth vs Reality</h2>  </div>
        <div className='w-4/6 h-10'></div>
        <div className='w-1/6 bg-pink-200 text-pink-800 flex justify-center font-semibold align-center text-md gap-x-2 pt-2 h-10 hover:bg-blue-200'><Newspaper/><h2>Press Release</h2></div>
    </div>
    <div className="p-4">
    <ElectionCommission/>
    </div>
    <NewsTabs/>
    <CardContainer/>
    <Footer/>

    </div>
  )
}

export default App
