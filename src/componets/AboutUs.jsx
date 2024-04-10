export default function AboutUs() {
  return (
    <div>
      <div className="py-10 flex justify-center">
        <div className="md:w-4/5 w-full">
          <div className="text-[50px] font-bold text-center">
            WELCOME TO CENTRAL CITY VENDING:{" "}
            <span className="text-blue-700">
              ELEVATING BREAKROOM EXPERIENCE
            </span>
          </div>
          <div className="flex justify-center my-10">
          <div className="text-center text-xl w-3/5 ">
            AT Central City Vending, we believe that a workplace is more than
            just a space where people gather to work it&apos;s a community. Our
            mission is to transform break rooms into vibrant, uplifting spaces,
            fostering joy and connectivity through our top-notch vending
            solutions.
          </div>
          </div>
          <div className="flex justify-center">
            <button className="w-[200px] py-4 bg-blue-700 font-bold text-white">LEARN MORE...</button>
          </div>
       
        </div>
      </div>
    </div>
  );
}
