import how_it_works from "../assets/carousel images/Rectangle 777.png";
export default function HowItWorks() {
  return (
    <div className="h-[100vh]">
      <div className="w-full relative h-[60vh]">
        <img src={how_it_works} className="absolute z-0 w-full h-full" alt="" />
        <div className="flex flex-col justify-center items-center absolute w-full h-full">
          <div className="bg-gray-200 px-4 py-2 border-x-[4px] border-blue-700 font-bold">
            How it works
          </div>
          <div className="font-extrabold text-[40px] mt-2 max-w-[800px] text-center">
            &quot;UNLOCKING CONVENIENCE:{" "}
            <span className="text-blue-700">
              HOW IT WORKS WITH CENTRAL CITY VENDING&quot;
            </span>
          </div>
        </div>
      </div>
      <div className=" flex justify-center relative top-[-80px]">
        <div className="p-5 w-[350px] bg-white m-4 shadow-2xl flex flex-col gap-2">
          <div className="w-[50px] h-[50px] bg-blue-800 text-white font-bold text-xl flex justify-center items-center">
            1
          </div>
          <div className="text-lg font-extrabold">
            CHOOSE YOUR VENDING EXPERIENCE
          </div>
          <div className="text-lg">
            Select from our range of state-of-the-art vending machines designed
            to elevate your breakroom atmosphere. Whether it&apos;s snacks,
            beverages, or a combination of both, Central City Vending offers a
            variety of options to suit your workplace preferences.
          </div>
        </div>
        <div className="p-5 w-[350px] bg-white m-4 shadow-2xl flex flex-col gap-2">
          <div className="w-[50px] h-[50px] bg-blue-800 text-white font-bold text-xl flex justify-center items-center">
            2
          </div>
          <div className="text-lg font-extrabold">
            SCHEDULE YOUR FREE INSTALLATION
          </div>
          <div className="text-lg">
            Experience the ease of our hassle-free process. Simply reach out to
            us to schedule your free vending machine installation. Our expert
            team will handle everything, ensuring a seamless setup that aligns
            with your convenience and business hours.
          </div>
        </div>
        <div className="p-5 w-[350px] bg-white m-4 shadow-2xl flex flex-col gap-2">
          <div className="w-[50px] h-[50px] bg-blue-800 text-white font-bold text-xl flex justify-center items-center">
            3
          </div>
          <div className="text-lg font-extrabold">ENJOY JOYFUL BREAKS</div>
          <div className="text-lg">
            Once installed, your Central City Vending machine is ready to
            delight. From healthy snack choices to refreshing beverages, our
            commitment to servicing ensures your breakroom stays stocked and
            your team experiences the joy of a rejuvenating break. Elevate your
            workplace with Central City Vending – where every break is a moment
            of joy.
          </div>
        </div>
      </div>
    </div>
  );
}
