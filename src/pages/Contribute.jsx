import Navbar from "../components/Navbar";

import IMG from "../assets/pic.jpg";
import { BsTwitter, BsTelegram } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { FaDiscord } from "react-icons/fa";

const Contribute = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="grid mt-6 md:grid-cols-7 gap-6">
        <div className="col-span-4 w-full border-2 border-rose-600 rounded-2xl overflow-hidden">
          <img className="w-full h-[250px] object-cover" src={IMG} alt="" />
          <div>
            <img
              className="w-32 h-32 rounded-full mx-auto -mt-16 border-4 border-rose-600 relative"
              src={IMG}
              alt=""
            />
            <div className="text-center">
              <h2 className="mt-2 font-light">ERAORA</h2>
              <div className="flex items-center justify-center my-4 gap-4 text-xl text-blue-400">
                <a href="#">
                  <BsTwitter />
                </a>
                <a href="#">
                  <BsTelegram />
                </a>
                <a href="#">
                  <TbWorld />
                </a>
                <a href="#">
                  <FaDiscord />
                </a>
              </div>
              <p className="text-gray-400 text-xl p-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis blanditiis, perferendis fugiat, praesentium natus ipsa
                maxime eaque ducimus nostrum quas est eos? Omnis quaerat totam
                alias. Quaerat sed placeat voluptate.
              </p>
            </div>
            <br />
            <ul className="px-12 py-4 flex flex-col gap-4">
              <li className="flex justify-between">
                <span>Presale Address</span>{" "}
                <div>
                  <p className="text-xl text-rose-600">
                    0x9u38402934oi0923480923
                  </p>
                  <p className="text-sm">
                    Do not send BNB directly to the presale address!
                  </p>
                </div>
              </li>
              <li className="flex justify-between">
                <span>Token Name</span>
                <span className="text-xl text-rose-600">ERAORA</span>
              </li>
              <li className="flex justify-between">
                <span>Token Symbol</span>
                <span className="text-xl text-rose-600">$EDT</span>
              </li>
              <li className="flex justify-between">
                <span>Total Supply:</span>
                <span className="text-xl text-rose-600">02384023</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-4 mb-6 md:col-span-3 w-full">
          <div className="border-2 mx-auto border-rose-600 rounded-2xl overflow-hidden p-4 text-center">
            <h3 className="text-rose-400 text-xl">Sale Starts in</h3>
            <p className="text-rose-600 mb-6">8:04:39:12</p>

            <h4>Contribute</h4>
            <div className="grid grid-cols-2 gap-6 my-4 pb-4">
              <input
                className="bg-transparent border border-gray-500 px-4 rounded-md focus:outline-none"
                type="number"
                placeholder="Amount"
              />
              <button className="w-full flex justify-center rounded-md">
                BUY
              </button>
            </div>

            <ul>
              <li className="flex justify-between my-2">
                <span>Minimum Buy:</span>
                <span className="text-lg">0.1 BNB</span>
              </li>
              <li className="flex justify-between my-2">
                <span>Maximum Buy:</span>
                <span className="text-lg">360.0 BNB</span>
              </li>
              <li className="flex justify-between my-2">
                <span>Total Contributions:</span>
                <span className="text-lg">0 BNB</span>
              </li>
              <li className="flex justify-between my-2">
                <span>My Reserved Token:</span>
                <span className="text-lg">0$EOT</span>
              </li>
              <li className="flex justify-between my-2">
                <span>Presale Rate:</span>
                <span className="text-lg">215115110000</span>
              </li>
            </ul>
          </div>
          <div className="border-2 border-rose-600 rounded-2xl p-4 mt-6 text-center">
            <h3>Estimated DEX Listing Time</h3>
            <p className="text-gray-400">34:04:22:13</p>

            <div className="text-left mt-6 mb-2">
              <p>Token Address</p>
              <p className="text-rose-500">0x9u38402934oi0923480923</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contribute;
