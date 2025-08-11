
import Wash from "./components/Expertise"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Service from "./components/Heritage"

import Qa from "./components/Journey"

import Navbar from "./components/Navbar"
import Call from "./components/Story"


function App() {

  return (
    <>
      <Navbar />
      <Header />
       <Service />
       <Qa />
      <Call />
       <Wash imageSrc="/wash.png"  />
      <Footer />
    </>
  )
}

export default App
