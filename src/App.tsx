import { useState } from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
const App = () => {
  const [currentGenre, setCurrentGenre] = useState("");
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-5">
        <Sidebar setCurrentGenre={setCurrentGenre} />
        <Main currentGenre={currentGenre} />
      </div>
    </div>
  );
};

export default App;
