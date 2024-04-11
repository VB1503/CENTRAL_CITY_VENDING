import home_bg from "../assets/carousel images/Rectangle 776.png";
export default function Home() {
  return (
    <div className="bg-white w-full h-[87vh] relative">
      <img src={home_bg} className="w-full h-full absolute z-0 " alt="" />
      <div className="z-30 absolute h-full md:flex justify-center items-center">
        <div className="md:w-4/5 w-full px-3 flex justify-between">
          <div className="w-3/5 text-white  flex flex-col justify-between">
            <div className="lg:text-[50px] text-[30px] font-bold">
              BAKERSFIELD MOST REPUTABLE VENDING MACHINE PARTNER
            </div>
            <div className="font-bold">
            <div className="text-[40px] ">
                <span className="text-blue-700 ">Free</span> installation and service.</div>
            <div className="text-[40px]">no upfront payments or cost.</div>
            </div>
           
            <div className="flex font-bold">
              <button className="px-[40px] py-3 m-2 border border-[3px] border-white shadow-xl">REVIEWS</button>
              <button className="px-[40px] py-3 m-2 bg-blue-700 shadow-xl">GET STARTED</button>
            </div>
          </div>
            <div className="w-[442px] h-[516px] bg-white border border-blue-700 p-8">
                <div className="md:text-[18px] text-[15px] font-extrabold text-center">
                GET SMART VENDING SERVICES INSTALLED AT <span className="text-blue-700">NO COST</span> TO YOUR ORGANIZATION
    
                </div>
                <hr className="border-blue-700 border"/>
                <div className="flex flex-col justify-evenly">
                <div className="m-2">
                <input type="text"  className="outline-none  px-2 border-2 py-2 w-full" placeholder="Full Name"/>
                </div>
                <div className="m-2">
                <input type="text"  className="outline-none  px-2 border-2 py-2 w-full" placeholder="Phone Number"/>
                </div>
                <div className="m-2">
                <input type="text"  className="outline-none  px-2 border-2 py-2 w-full" placeholder="Email Address"/>
                </div>
                <div className="m-2">
                <input type="text"  className="outline-none  px-2 border-2 py-2 w-full" placeholder="Company"/>
                </div>
                <div className="m-2">
                <input type="text"  className="outline-none  px-2 border-2 py-2 w-full" placeholder="Company"/>
                </div>
                <div className="m-2">
                <button className="shadow-xl w-full bg-blue-700 font-bold py-2 text-white ">GET STARTED</button>
                </div>
                </div>
              
          </div>
        </div>
      </div>
    </div>
  );
}
