import { useState } from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import PlatformSelector from "./components/PlatformSelector";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  console.log(selectedPlatform);

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-5">
        <div className="col-span-1"></div>
        <div className="col-span-4 p-4">
          <PlatformSelector onSelectPlatform={setSelectedPlatform} />
        </div>
      </div>
      <div className="grid grid-cols-5 border-t">
        <Sidebar onSelectGenre={setSelectedGenre} />
        <Main genre={selectedGenre} platform={selectedPlatform} />
      </div>
    </div>
  );
};

export default App;
