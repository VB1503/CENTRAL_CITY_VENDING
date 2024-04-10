import logo from "../assets/carousel images/68152809210.png";
export default function Header() {
  return (
    <div className="w-full h-[120px] shadow-xl flex justify-center items-center">
      <div className="md:w-4/5 w-full px-3   flex justify-between items-center">
        <div className="logo ">
          <img src={logo} alt="" className="h-[70px]" />
        </div>
        <div className="">Home</div>
        <div className="">About Us</div>
        <div className="">How it works</div>
        <div className="">Services</div>
        <div className="">Contact Us</div>
        <button className="px-8 py-3 bg-blue-700 text-white shadow-xl">
          GET STARTED
        </button>
      </div>
    </div>
  );
}
