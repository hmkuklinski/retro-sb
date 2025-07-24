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
import Breakfast from './components/food/Breakfast';
import Snacks from './components/food/Snacks';
import Bakery from './components/food/Bakery';
import Lunch from './components/food/Lunch.jsx';
import SeasonalBakes from './components/food/SeasonalBakes.jsx';
import Careers from './components/pages/Careers.jsx';
import Barista from './components/pages/Barista.jsx';
import Shift from './components/pages/Shift.jsx';
import ASM from './components/pages/ASM.jsx';
import SM from './components/pages/SM.jsx';
import DM from './components/pages/DM.jsx';

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
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/bakery" element={<Bakery />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/snacks" element={<Snacks />} />
        <Route path="/bakery-limited" element={<SeasonalBakes />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/barista" element={<Barista />} />
        <Route path="/careers/shift" element={<Shift />} />
        <Route path="/careers/asm" element={<ASM />} />
        <Route path="/careers/sm" element={<SM />} />
        <Route path="/careers/dm" element={<DM />} />
      </Routes>
    </div>
  );
}

export default App;
