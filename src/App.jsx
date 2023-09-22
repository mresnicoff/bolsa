import React from 'react'
import{Footer,Navbar,Jobs,Search,Value} from './Components'

const App = () => {
  return (
    <div className="w-[90%] m-auto ">
    <Navbar/>
    <Search/>
    <Jobs/>
    <Value/>
    <Footer/>

    </div>
  )
}

export default App