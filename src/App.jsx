import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FlipContainer from "./Components/Flip/FlipContainer";
import Home from "./Components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flip" element={<FlipContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
