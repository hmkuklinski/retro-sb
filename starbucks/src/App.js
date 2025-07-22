import './App.css';
import Home from './components/home/Home';
import Coffee from './components/coffee/Coffee';
import Specialty from './components/specialties/Specialty';
import Tea from './components/tea/Tea';
import Fraps from './components/fraps/Fraps';
import Refreshers from './components/refreshers/Refreshers';
import Seasonal from './components/seasonal/Seasonal';
import Classics from './components/classics/Classics';
import Food from './components/food/Food';

import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coffee" element={<Coffee />} />
        <Route path="/classics" element={<Classics />} />
        <Route path="/specialty" element={<Specialty />} />
        <Route path="/tea" element={<Tea />} />
        <Route path="/fraps" element={<Fraps />} />
        <Route path="/refreshers" element={<Refreshers />} />
        <Route path="/seasonal" element={<Seasonal />} />
        <Route path="/food" element={<Food />} />
      </Routes>
    </div>
  );
}

export default App;
