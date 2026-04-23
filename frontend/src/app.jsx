//importtaa react routerin
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import "./style.css";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
    
  );
}
