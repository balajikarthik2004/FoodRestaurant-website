import Navbar from "./component/Navbar"
import Hero from "./component/Hero"
import Banner from "./component/Banner"
import WhyChoose from "./component/WhyChoose/WhyChoose"
import About from "./component/About"
import Contact from "./Contact"
import PopUp from "./component/PopUp"
import { useEffect, useState } from "react"
import AOS from 'aos'
import "aos/dist/aos.css"
function App() {

  const [showPopup,setshowPopup] =useState(false)
  const HandlePopup = () => {
    setshowPopup(true);
  }
  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-insine",
      delay:100
    });
    AOS.refresh();
  },[])
   
  return (
    <>
      <div className='overflow-x-hidden'>
        <Navbar HandlePopup={HandlePopup}/>
        <Hero/>
        <Banner/>
        <WhyChoose/>
        <About HandlePopup={HandlePopup}/>
        <Banner/>
        <Contact/>
        <PopUp showPopup=
        {showPopup} setshowPopup={setshowPopup}/>
      </div>
       
    </>
  )
}

export default App
