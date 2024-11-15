import logo from './logo.svg';
import './App.css';
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import AllShops from './pages/AllShops';
import Home from './pages/Home';
import Bar from './pages/Bar';
import DeleteShop from './pages/DeleteShop';
import About from './pages/About';
import UpdateShop from './pages/UpdateShop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Bar/>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/AllShops" element={<AllShops />} />
        <Route path="/UpdateShop" element={<UpdateShop />} />
        <Route path="/DeleteShop" element={<DeleteShop />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
