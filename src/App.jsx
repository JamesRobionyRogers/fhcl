
import Landing from "./sections/Landing"; 
import LogoClouds from "./components/LogoClouds";
import Projects from "./sections/Projects"; 
import Services from "./sections/Services"
import OurProcess from "./sections/OurProcess"
import ContactUs from "./sections/ContactUs"; 
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
      <Landing />
      {/* <LogoClouds /> */}
      <Projects />
      <Services />
      <OurProcess />
      <ContactUs /> 
      <Footer />
    </>
  )
}