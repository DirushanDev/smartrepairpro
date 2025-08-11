import About from "./components/About"
import Contact from "./components/Contact"
import Expertise from "./components/Expertise"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Heritage from "./components/Heritage"
import InfoSection from "./components/InfoSection"
import Journey from "./components/Journey"
import Menu from "./components/Menu"
import Navbar from "./components/Navbar"
import Story from "./components/Story"
import Testimonials from "./components/Testimonials"


function App() {

  return (
    <>
      <Navbar />
      <Header />
       <Journey />
      <Story />
      {/* <Journey />
      <Heritage />
      <Expertise />
      <Menu />
      <InfoSection />
      <Testimonials />
      <Contact /> */}
      <Footer />
    </>
  )
}

export default App
