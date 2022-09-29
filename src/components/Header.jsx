import IMG from "../assets/pic.jpg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="flex gap-4 overflow-x-auto pb-4 pt-4 mt-4 mb-4 bg-[#111a39] md:bg-transparent scroller">
        <button className="min-w-fit bg-transparent border-2 border-rose-500">
          Spotlight
          <img className="w-6 h-6 object-cover rounded-full" src={IMG} alt="" />
        </button>
        <button className="min-w-fit bg-transparent border-2 border-rose-500">
          COLLECGE
          <img className="w-6 h-6 object-cover rounded-full" src={IMG} alt="" />
        </button>
        <button className="min-w-fit bg-transparent border-2 border-rose-500">
          TINU
          <img className="w-6 h-6 object-cover rounded-full" src={IMG} alt="" />
        </button>
        <button className="min-w-fit bg-transparent border-2 border-rose-500">
          GLORY
          <img className="w-6 h-6 object-cover rounded-full" src={IMG} alt="" />
        </button>
      </div>
      <div className="my-2 md:my-12 flex max-w-full overflow-x-auto items-center gap-4 pb-4 pt-4 bg-[#111a39] md:bg-transparent scroller">
        <div className="text-white rounded-lg md:mb-0 min-w-fit border border-rose-500 flex items-center gap-3 p-3 hover:bg-rose-500/30 duration-200">
          <img
            className="w-12 h-12 object-cover rounded-full"
            src={IMG}
            alt=""
          />
          <div className="text-end">
            <h4>Memenation</h4>
            <p>22X</p>
          </div>
        </div>
        <div className="text-white rounded-lg min-w-fit border border-rose-500 flex items-center gap-3 p-3 hover:bg-rose-500/30 duration-200">
          <img
            className="w-12 h-12 object-cover rounded-full"
            src={IMG}
            alt=""
          />
          <div className="text-end">
            <h4>Twoge Inu</h4>
            <p>11.5X</p>
          </div>
        </div>
        <div className="text-white rounded-lg min-w-fit border border-rose-500 flex items-center gap-3 p-3 hover:bg-rose-500/30 duration-200">
          <img
            className="w-12 h-12 object-cover rounded-full"
            src={IMG}
            alt=""
          />
          <div className="text-end">
            <h4>Memenation</h4>
            <p>2X</p>
          </div>
        </div>
        <div className="text-white rounded-lg min-w-fit border border-rose-500 flex items-center gap-3 p-3 hover:bg-rose-500/30 duration-200">
          <img
            className="w-12 h-12 object-cover rounded-full"
            src={IMG}
            alt=""
          />
          <div className="text-end">
            <h4>Memenation</h4>
            <p>22X</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
