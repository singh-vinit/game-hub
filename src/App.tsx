import { useState } from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import PlatformSelector from "./components/PlatformSelector";
import RelevanceSelector from "./components/RelevanceSelector";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedOrder, setSelectedOrder] = useState("");

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-5">
        <div className="col-span-1"></div>
        <div className="col-span-4 p-4 flex gap-x-10">
          <PlatformSelector onSelectPlatform={setSelectedPlatform} />
          <RelevanceSelector onSelectOrder={setSelectedOrder} />
        </div>
      </div>
      <div className="grid grid-cols-5 border-t">
        <Sidebar onSelectGenre={setSelectedGenre} />
        <Main genre={selectedGenre} platform={selectedPlatform} order={selectedOrder} />
      </div>
    </div>
  );
};

export default App;
