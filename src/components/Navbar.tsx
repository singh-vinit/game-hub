import Switch from "./Switch";
const Navbar = () => {
  return (
    <div className="border flex justify-around items-center p-5">
      <div>logo</div>
      <input
        type="text"
        placeholder="search games..."
        className="w-2/3 bg-gray-200 rounded-full text-lg px-4 py-1 focus:outline-blue-400 hover:bg-gray-300"
      />
      <Switch />
    </div>
  );
};

export default Navbar;

// api-key: fd9de0b1e991460c9c45169d797ae783