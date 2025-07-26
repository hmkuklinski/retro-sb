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
import Signature from './components/coffee/Signature.jsx';
import Travelers from './components/coffee/Travelers.jsx';
import IcedClassics from './components/classics/IcedClassics.jsx';
import HotClassics from './components/classics/HotClassics.jsx';
import BreakfastSandwiches from './components/food/BreakfastSandwiches.jsx';
import EggBites from './components/food/EggBites.jsx';
import Croissants from './components/food/Croissants.jsx';
import SnackBox from './components/food/SnackBox.jsx';
import SnackPockets from './components/food/SnackPockets.jsx';
import Loafs from './components/food/Loafs.jsx';
import BakedGoods from './components/food/BakedGoods.jsx';
import ClassicFraps from './components/fraps/ClassicFraps.jsx';
import SeasonalFraps from './components/fraps/SeasonalFraps.jsx';
import ClassicRefreshers from './components/refreshers/ClassicRefreshers.jsx';
import SeasonalRefreshers from './components/refreshers/SeasonalRefreshers.jsx';
import HotSpecialty from './components/specialties/HotSpecialty.jsx';
import IcedSpecialty from './components/specialties/IcedSpecialty.jsx';
import ShakenEspresso from './components/specialties/ShakenEspresso.jsx';
import HotTea from './components/tea/HotTea.jsx';
import IcedTea from './components/tea/IcedTea.jsx';
import TeaLattes from './components/tea/TeaLattes.jsx';
import Process from './components/home/Process.jsx';
import Error from './components/Error.jsx';
import {Routes, Route} from "react-router-dom";




function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coffee" element={<Coffee />} />
        <Route path="/coffee/roasts" element={<Signature />}/>
        <Route path="/coffee/travelers" element={<Travelers />} />

        <Route path="/classics" element={<Classics />} />
        <Route path="/classics/iced" element={<IcedClassics />} />
        <Route path="/classics/hot" element={<HotClassics />} />

        <Route path="/specialty" element={<Specialty />} />
        <Route path="/specialty/hot" element={<HotSpecialty />} />
        <Route path="/specialty/iced" element={<IcedSpecialty />} />
        <Route path="/specialty/shaken-espresso" element={<ShakenEspresso />} />

        <Route path="/tea" element={<Tea />} />
        <Route path="/tea/hot" element={<HotTea />} />
        <Route path="/tea/iced" element={<IcedTea />} />
        <Route path="/tea/lattes" element={<TeaLattes />} />

        <Route path="/fraps" element={<Fraps />} />
        <Route path="/fraps/classics" element={<ClassicFraps />} />
        <Route path="/fraps/seasonal" element={<SeasonalFraps />} />

        <Route path="/refreshers" element={<Refreshers />} />
        <Route path="/refreshers/classic" element={<ClassicRefreshers />} />
        <Route path="/refreshers/seasonal" element={<SeasonalRefreshers />} />

        <Route path="/seasonal" element={<Seasonal />} />

        <Route path="/food" element={<Food />} />
        <Route path="/food/breakfast" element={<Breakfast />} />
        <Route path="/food/breakfast-sandwiches" element={<BreakfastSandwiches />} />
        <Route path="/food/egg-bites" element={<EggBites />} />
        <Route path="/food/bakery" element={<Bakery />} />
        <Route path="/food/croissants" element={<Croissants />} />
        <Route path="/food/loafs" element={<Loafs />} />
        <Route path="/food/lunch" element={<Lunch />} />
        <Route path="/food/snacks" element={<Snacks />} />
        <Route path="/food/snack-boxes" element={<SnackBox />} />
        <Route path="/food/snack-pockets" element={<SnackPockets />}/>
        <Route path="/food/baked-goods" element={<BakedGoods />} />
        <Route path="/food/bakery-limited" element={<SeasonalBakes />} />

        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/barista" element={<Barista />} />
        <Route path="/careers/shift" element={<Shift />} />
        <Route path="/careers/asm" element={<ASM />} />
        <Route path="/careers/sm" element={<SM />} />
        <Route path="/careers/dm" element={<DM />} />

        <Route path="/origins" element={<Origins />} />
        <Route path="/process" element={<Process />} />
        <Route path="/food-donations" element={<FoodDonations />} />
        <Route path="/communities" element={<Communities />} />

        <Route path="/beans" element={<Beans />} />
        <Route path="/beans/blonde" element={<Blonde />} />
        <Route path="/beans/medium" element={<Medium />} />
        <Route path="/beans/dark" element={<Dark />} />
        <Route path="/beans/decaf" element={<Decaf />} />
        <Route path="/beans/flavored" element={<Flavored />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
