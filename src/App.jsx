
import Wash from "./components/Expertise"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Service from "./components/Heritage"

import Qa from "./components/Journey"

import Navbar from "./components/Navbar"
import Call from "./components/Story"
import TestimonialSection from "./components/TestimonialSection";

function App() {

  return (
    <>
      <Navbar />
      <Header />
       <Service />
       <Qa />
      <Call />
       <Wash imageSrc="/wash.png"  />
       <TestimonialSection />
      <Footer />
    </>
  )
}

export default App
