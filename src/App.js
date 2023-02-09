import Home from "./pages/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Available_bus_page from "./pages/Available_bus_page";

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/available_bus" element={<Available_bus_page/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
