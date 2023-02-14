import Home from "./pages/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Available_bus_page from "./pages/Available_bus_page";
import Info_Page from "./pages/Info_Page";
import Payment from "./pages/Payment";


function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/infoPage" element={<Info_Page/>}/>
        <Route path="/available_bus" element={<Available_bus_page/>}/>
        <Route path="/payment" element={<Payment/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
