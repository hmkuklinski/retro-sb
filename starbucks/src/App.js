import './App.css';
import Home from './components/Home';
import Coffee from './components/Coffee';
import Specialty from './components/Specialty';
import Tea from './components/Tea';
import Fraps from './components/Fraps';
import Refreshers from './components/Refreshers';
import Seasonal from './components/Seasonal';
import {Routes, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coffee" element={<Coffee />} />
        <Route path="/specialty" element={<Specialty />} />
        <Route path="/tea" element={<Tea />} />
        <Route path="/fraps" element={<Fraps />} />
        <Route path="/refreshers" element={<Refreshers />} />
        <Route path="/seasonal" element={<Seasonal />} />
      </Routes>
    </div>
  );
}

export default App;
