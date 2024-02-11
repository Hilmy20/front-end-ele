// import FaceFrownIcon from "@heroicons/react/24/solid/FaceFrownIcon";
function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center h-screen">
        {/* Top Row */}
        <div key={1} className="box">
          <div className="p-4 border border-gray-300 rounded-md text-center">
            <h2 className="text-lg font-bold mb-2">Box 1</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Pencet
            </button>
          </div>
        </div>
        <div key={2} className="box">
          <div className="p-4 border border-gray-300 rounded-md text-center">
            <h2 className="text-lg font-bold mb-2">Box 2</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Pencet
            </button>
          </div>
        </div>
        <div key={3} className="box">
          <div className="p-4 border border-gray-300 rounded-md text-center">
            <h2 className="text-lg font-bold mb-2">Box 3</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Pencet
            </button>
          </div>
        </div>
        <div key={4} className="box">
          <div className="p-4 border border-gray-300 rounded-md text-center">
            <h2 className="text-lg font-bold mb-2">Box 4</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Pencet
            </button>
          </div>
        </div>

        {/* Bottom Row */}
        <div key={5} className="box">
          <div className="p-4 border border-gray-300 rounded-md text-center">
            <h2 className="text-lg font-bold mb-2">Box 5</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Pencet
            </button>
          </div>
        </div>
        <div key={6} className="box">
          <div className="p-4 border border-gray-300 rounded-md text-center">
            <h2 className="text-lg font-bold mb-2">Box 6</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Pencet
            </button>
          </div>
        </div>
        <div key={7} className="box">
          <div className="p-4 border border-gray-300 rounded-md text-center">
            <h2 className="text-lg font-bold mb-2">Box 7</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Pencet
            </button>
          </div>
        </div>
        <div key={8} className="box">
          <div className="p-4 border border-gray-300 rounded-md text-center">
            <h2 className="text-lg font-bold mb-2">Box 8</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Pencet
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
