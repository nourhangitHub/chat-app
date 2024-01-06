import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Chatpage from "./pages/Chatpage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Homepage/> } exact />
        <Route path="/chat" element={ <Chatpage/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
