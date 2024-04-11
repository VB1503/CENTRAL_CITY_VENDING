import diamond from "../assets/icons/diamond.png"
import madland from "../assets/icons/madland.png"
import housing from "../assets/icons/housing.png"
export default function Reviews() {
  return (
    <div className="pt-[80px] h-[100vh] flex flex-col items-center">
      <div className="text-[50px]">
        WHAT OUR <span className="text-blue-700">CLIENTS SAY</span>
      </div>
      <div className="pt-[100px] md:w-4/5 flex gap-4">
        <div className="w-1/3">
            <img src={diamond} className="w-full h-[100px]" alt="" />
            <div className="w-full p-10 shadow-lg border-1">
                <div className="text-[20px] text-blue-700 font-bold">RESSE.W <div className=""></div></div>
                <div className="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ex voluptatem quo quidem, voluptatum amet praesentium excepturi. Facilis dolorem similique, non rem ducimus atque iusto, veniam neque, commodi laudantium sint!</div>
            </div>
        </div>
        <div className="w-1/3">
        <img src={madland} alt="" className="w-full bg-black h-[100px]" />
        <div className="w-full p-10 shadow-lg border-1">
                <div className="text-[20px] text-blue-700 font-bold">CHRIS.G<div className=""></div></div>
                <div className="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ex voluptatem quo quidem, voluptatum amet praesentium excepturi. Facilis dolorem similique, non rem ducimus atque iusto, veniam neque, commodi laudantium sint!</div>
            </div>
        </div>

        <div className="w-1/3">
        <img src={housing} alt="" className="w-full h-[100px]" />
        <div className="w-full p-10 shadow-lg border-1">
                <div className="text-[20px] text-blue-700 font-bold">BARADEN.S <div className=""></div></div>
                <div className="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ex voluptatem quo quidem, voluptatum amet praesentium excepturi. Facilis dolorem similique, non rem ducimus atque iusto, veniam neque, commodi laudantium sint!</div>
            </div>
        </div>
      </div>
    </div>
  );
}
