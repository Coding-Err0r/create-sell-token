import Card from "./Card";

const Main = () => {
  return (
    <div className="container">
      <h2 className="text-white font-light">Current Presales</h2>
      <div className="md:flex gap-6 my-6">
        <input
          className="bg-transparent border min-w-fit border-gray-500 rounded-full py-2 px-4 w-full"
          type="text"
          placeholder="Enter token name or symbol name"
        />
        <div className="flex gap-3 min-w-[360px] justify-center md:justify-end mt-6 md:mt-0">
          <button className="bg-transparent border border-gray-500 rounded-full">
            All Status
          </button>
          <button className="bg-transparent border border-gray-500 rounded-full">
            No filter
          </button>
        </div>
      </div>

      <br />
      <br />
      <div className="grid place-items-center gap-4 md:grid-cols-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="py-8 mb-10 flex flex-col items-center gap-4">
        <button className="px-8 max-w-fit bg-transparent border-2 border-rose-500">
          View More
        </button>
        <p className="max-w-[700px] text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          temporibus voluptas adipisci neque rem voluptatibus culpa totam porro
          sint, laboriosam unde maxime nobis est quisquam perferendis maiores
          quasi cum amet.
        </p>
      </div>
    </div>
  );
};

export default Main;
