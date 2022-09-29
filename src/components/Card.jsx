import IMG from "../assets/pic.jpg";
import { BsFillBellFill, BsFillHeartFill } from "react-icons/bs";

const Card = () => {
  return (
    <div className="border-2 border-rose-900 rounded-3xl p-6 relative max-w-[330px] md:max-w-[400px] mb-10">
      <img
        className="w-[60px] h-[60px] border-4 border-rose-500 rounded-full absolute -top-8"
        src={IMG}
        alt=""
      />

      <div className="flex items-center">
        <h3 className="uppercase mt-4 text-xl">ERAORA</h3>
        <div className="flex items-end gap-1 md:ml-6 -mt-8 justify-end">
          <div className="bg-green-500/30 flex rounded-full py-1 px-2 items-center gap-2 text-[10px]">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            KYC
          </div>
          <div className="bg-blue-500/30 flex rounded-full py-1 px-2 items-center gap-2  text-[10px]">
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            Sale Live
          </div>
          <div className="bg-rose-500/30 flex rounded-full py-1 px-2 items-center gap-2  text-[10px]">
            <span className="w-3 h-3 bg-rose-500 rounded-full"></span>
            Audit
          </div>
        </div>
      </div>

      <p className="py-2 md:py-4 text-xl md:text-2xl text-gray-400">
        Max Contribution: 3.0 BNB
      </p>

      <ul className="mt-3">
        <li className="flex justify-between text-md md:text-xl font-semibold">
          <span>Hard Cap:</span>
          <span className="text-purple-600">360 BNB</span>
        </li>
        <li className="flex justify-between text-md md:text-xl font-semibold py-2">
          <span>Liquidity:</span>
          <span className="text-purple-600">60 %</span>
        </li>
        <li className="flex justify-between text-md md:text-xl font-semibold">
          <span>Lock Time:</span>
          <span className="text-purple-600">90 days</span>
        </li>
      </ul>

      <div className="flex justify-between items-center border-t pt-4 mt-6">
        <div>
          <p className="text-lg md:text-xl">Sale Starts In:</p>
          <p className="text-gray-400">21:20:21</p>
        </div>
        <div className="flex gap-4 text-lg md:text-2xl text-gray-400">
          <BsFillBellFill />
          <BsFillHeartFill />
        </div>
      </div>
    </div>
  );
};

export default Card;
