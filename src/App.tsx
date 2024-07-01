import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-5">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};

export default App;
