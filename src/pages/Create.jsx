import Navbar from "../components/Navbar";

const Create = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="w-full border-2 border-rose-600 rounded-2xl p-6 max-w-[700px] mx-auto mt-16">
        <div className="-mt-12 text-center">
          <h2 className="w-fit mx-auto bg-[#000518] px-4">Create Token</h2>
        </div>
        <form>
          <div className="mt-8">
            <p className="text-xl pb-3">Token Type</p>
            <input
              className="w-full p-3 rounded-md bg-transparent border border-rose-500 focus:outline-none"
              type="text"
              placeholder="Simple token"
            />
          </div>
          <div className="mt-8">
            <p className="text-xl pb-3">Token Name</p>
            <input
              className="w-full p-3 rounded-md bg-transparent border border-rose-500 focus:outline-none"
              type="text"
              placeholder="Ex: Etherreum"
            />
          </div>
          <div className="mt-8">
            <p className="text-xl pb-3">Token Symbol</p>
            <input
              className="w-full p-3 rounded-md bg-transparent border border-rose-500 focus:outline-none"
              type="text"
              placeholder="Ex: ETH"
            />
          </div>
          <div className="mt-8">
            <p className="text-xl pb-3">Token Decimals</p>
            <input
              className="w-full p-3 rounded-md bg-transparent border border-rose-500 focus:outline-none"
              type="text"
              placeholder="Ex: 18"
            />
          </div>
          <div className="mt-8 mb-8">
            <p className="text-xl pb-3">Total Supply</p>
            <input
              className="w-full p-3 rounded-md bg-transparent border border-rose-500 focus:outline-none"
              type="text"
              placeholder="Ex: 1000000"
            />
          </div>
          <div className="-mb-12 text-center">
            <button className="w-fit border border-rose-500 mx-auto hover:bg-rose-700 bg-[#000518] px-4">
              Create Token
            </button>
          </div>
        </form>
      </div>
      <div className="h-[100px]"></div>
      <p className="pb-12 max-w-[600px] mx-auto text-center text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet odio modi
        omnis reprehenderit. Odio voluptates consequatur excepturi illum.
        Cupiditate aperiam odit rerum eius ad dicta quasi officiis perferendis,
        placeat eos?
      </p>
    </div>
  );
};

export default Create;
