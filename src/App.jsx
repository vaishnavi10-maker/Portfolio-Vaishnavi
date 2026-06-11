 
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header"
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
 
import './index.css';
import CertificationsSection from "../components/CertificationSection";
const App = () => {
  return (
    <div className="bg-black min-h-screen">
        <Header/>   
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <CertificationsSection />
        <Experience/>
        <Contact/>
        <Footer/>
      
    </div>
  )
}

export default App