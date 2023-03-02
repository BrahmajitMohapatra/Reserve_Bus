import Home from "./pages/Home";
import {
  Routes,
  Route,
} from "react-router-dom";
import BusDisplay from "./pages/BusDisplay";
import Info from "./pages/Info"
import Payment from "./pages/Payment"


function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bus-display" element={<BusDisplay />} />
        <Route path="/info" element={<Info />} />
        <Route path="/info/payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
