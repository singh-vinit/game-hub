const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-5">
      <div className="font-mono text-2xl font-semibold">gamex</div>
      <input
        type="text"
        placeholder="search games..."
        className="w-1/2 bg-gray-200 rounded-full text-lg px-4 py-1 focus:outline-blue-400 hover:bg-gray-300"
      />
      <input type="checkbox" />
    </div>
  );
};

export default Navbar;

// api-key: fd9de0b1e991460c9c45169d797ae783
