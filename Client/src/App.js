import Home from "./pages/Home";
import {
  Routes,
  Route,
} from "react-router-dom";
import BusDisplay from "./pages/BusDisplay";


function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bus-display" element={<BusDisplay />} />
      </Routes>
    </div>
  );
}

export default App;
