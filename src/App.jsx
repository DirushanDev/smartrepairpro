// App.jsx
import Wash from "./components/Expertise";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Service from "./components/Heritage";
import Qa from "./components/Journey";
import Navbar from "./components/Navbar";
import Call from "./components/Story";
import TestimonialSection from "./components/TestimonialSection";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-neutral-900 dark:text-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-3 flex justify-end">
        <ThemeToggle />
      </div>

      <Header />
      <Service />
      <Qa />
      <Call />
      <Wash imageSrc="/wash.png" />
      <TestimonialSection />
      <Footer />
    </div>
  );
}

export default App;
