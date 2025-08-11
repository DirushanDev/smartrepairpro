
import Expertise from "./components/Expertise"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Heritage from "./components/Heritage"

import Journey from "./components/Journey"

import Navbar from "./components/Navbar"
import Story from "./components/Story"


function App() {

  return (
    <>
      <Navbar />
      <Header />
       <Heritage />
       <Journey />
      <Story />
       <Expertise imageSrc="/wash.png"  />
      <Footer />
    </>
  )
}

export default App
