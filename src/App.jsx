import AboutUs from "./componets/AboutUs";
import Carousel from "./componets/Carousel";
import logo from "./assets/carousel images/68152809210.png";
import Home from "./componets/Home";
import HowItWorks from "./componets/HowItWorks";
import Reviews from "./componets/Reviews";
import Services from "./componets/Services";
import WhyChooseUs from "./componets/WhyChooseUs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useRef } from "react";
function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const howRef = useRef(null);
  const carouselRef = useRef(null);
  const servicesRef = useRef(null);
  const contactUs = useRef(null);
  return (
    <>
      <div className="w-full h-[120px] sticky top-0 z-40 bg-white shadow-xl flex justify-center items-center">
        <div className="md:w-4/5 w-full px-3   flex justify-between items-center text-xl">
          <div className="logo ">
            <img src={logo} alt="" className="h-[70px]" />
          </div>
          <div onClick={()=>homeRef.current?.scrollIntoView({ behavior: "smooth" })} className="cursor-pointer">Home</div>
          <div onClick={()=>aboutRef.current?.scrollIntoView({ behavior: "smooth" })} className="cursor-pointer">About Us</div>
          <div onClick={()=>howRef.current?.scrollIntoView({ behavior: "smooth" })} className="cursor-pointer">How it works</div>
          <div onClick={()=>servicesRef.current?.scrollIntoView({ behavior: "smooth" })} className="cursor-pointer">Services</div>
          <div onClick={()=>contactUs.current?.scrollIntoView({ behavior: "smooth" })} className="cursor-pointer">Contact Us</div>
          <button className="px-8 py-3 bg-blue-700 text-white shadow-xl">
            GET STARTED
          </button>
        </div>
      </div>
      <div ref={homeRef} className="">
        <Home />
      </div>
      <div ref={aboutRef} className="pt-[80px]">
        <AboutUs />
      </div>
      <div ref={howRef} className="pt-[80px]">
        <HowItWorks />
      </div>
      <div className="pt-[80px]" ref={carouselRef}>
        <Carousel />
      </div>
      <div className="pt-[80px]" ref={servicesRef}>
        <Services />
      </div>
      <Reviews />
      <div className="pt-[80px]" ref={contactUs}>
        <WhyChooseUs />
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col w-1/3 text-gray-400 gap-3">
            <hr className="border-2 border-gray-400"/>
            <div className="flex justify-evenly">
                <div className="cursor-pointer" onClick={()=>homeRef.current?.scrollIntoView({ behavior: "smooth" })}>Home</div>
                <div className="cursor-pointer" onClick={()=>aboutRef.current?.scrollIntoView({ behavior: "smooth" })}>About Us</div>
                <div className="cursor-pointer"  onClick={()=>howRef.current?.scrollIntoView({ behavior: "smooth" })}>How it Works</div>
                <div className="cursor-pointer" onClick={()=>contactUs.current?.scrollIntoView({ behavior: "smooth" })}>Contact</div>
                <div className="cursor-pointer" >FAQs</div>
            </div> 
            <div className="flex justify-evenly">
            <div className="">&copy; CENTRAL CITY VENDING</div>  
            <div className="">Privacy and Security Policy</div>  
            </div>   
            <div className="flex justify-center gap-4 text-[30px] pb-5">
                <FaSquareXTwitter />
                <FaFacebookF />
                <FaYoutube />
            </div>
        </div>
      
    </div>
    </>
  );
}

export default App;
