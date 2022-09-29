import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Contribute from "./pages/Contribute";
import Create from "./pages/Create";
import CreateSale from "./pages/CreateSale";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/create" element={<Create />} />
          <Route path="/createsale" element={<CreateSale />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
