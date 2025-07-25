import './App.css';
import ScrollToTop from './components/ScrollToTop.jsx';
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
import Origins from './components/home/Origins.jsx';
import FoodDonations from './components/home/FoodDonations.jsx';
import Communities from './components/home/Communities.jsx';
import Beans from './components/beans/Beans.jsx';
import Blonde from './components/beans/Blonde.jsx';
import Medium from './components/beans/Medium.jsx';
import Dark from './components/beans/Dark.jsx';
import Decaf from './components/beans/Decaf.jsx';
import Flavored from './components/beans/Flavored.jsx';




import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
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
        <Route path="/origins" element={<Origins />} />
        <Route path="/food-donations" element={<FoodDonations />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/beans" element={<Beans />} />
        <Route path="/beans/blonde" element={<Blonde />} />
        <Route path="/beans/medium" element={<Medium />} />
        <Route path="/beans/dark" element={<Dark />} />
        <Route path="/beans/decaf" element={<Decaf />} />
        <Route path="/beans/flavored" element={<Flavored />} />
      </Routes>
    </div>
  );
}

export default App;
