import Navbar from "../components/Navbar";

const CreateSale = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="w-full border-2 bg-rose-500/10 border-rose-600 rounded-2xl p-6 max-w-[900px] mx-auto mt-16">
        <div className="-mt-12 text-center">
          <h2 className="w-fit mx-auto bg-[#000518] px-4">Create Sale Token</h2>
        </div>
        <p className="mt-8 text-center text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          reprehenderit ducimus dignissimos debitis fugit quisquam perspiciatis
          ad doloremque odit architecto. Tenetur quia nemo exercitationem
          accusantium error, quas obcaecati eligendi quisquam tempore accusamus
          neque sit quae odit in porro? Nostrum tempore voluptas consequatur
          quis maiores nobis animi ipsa aut debitis explicabo?
        </p>

        <form>
          <div className="mt-8 text-center">
            <p className="text-xl pb-3">Token Address</p>
            <input
              className="w-full p-3 rounded-md bg-transparent border border-rose-500 focus:outline-none"
              type="text"
              placeholder="0x..."
            />
          </div>
          <div className="mt-8 text-center">
            <p className="text-xl pb-3">Rate</p>
            <div className="flex items-center gap-4">
              <span className="min-w-[100px] font-bold">1 BNB = </span>
              <input
                className="w-full p-3 rounded-md bg-transparent border border-rose-500 focus:outline-none"
                type="text"
                placeholder="0"
              />
              <span className="font-bold">tokens</span>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-xl pb-3">Hard Cap</p>
            <div className="flex items-center gap-4">
              <input
                className="w-[400px] mx-auto p-3 rounded-md bg-transparent border border-rose-500 focus:outline-none"
                type="text"
              />
              <span className="font-bold">BNB</span>
            </div>
            <p className="text-rose-500 pt-3">
              Amount (BNB) that you want to rise. After raising this amount
              contract will stop selling tokens.
            </p>
          </div>

          <div className="md:flex justify-between max-w-[70%] gap-8 mx-auto mb-10 mt-8">
            <div>
              <p className="my-2">Sale Start Date</p>
              <input
                className="bg-rose-500/30 py-2 px-6 rounded-md border border-rose-500"
                type="date"
              />
            </div>
            <div>
              <p className="my-2">Sale Start Date</p>
              <input
                className="bg-rose-500/30 py-2 px-6 rounded-md border border-rose-500"
                type="date"
              />
            </div>
          </div>
          <p className="pb-8 w-full text-center">Contract Creation Option</p>
          <div className="grid md:flex gap-4">
            <button className="bg-rose-500 rounded-xl">
              Flat rate BNB paid once for contract creation
            </button>
            <button className="bg-rose-500 rounded-xl">
              Free creation, royalty fee % collected from raised amounts (BNB)
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

export default CreateSale;
