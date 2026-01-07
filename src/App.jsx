import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Product from './components/Product';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Timeline from './components/Timeline';
import Team from './components/Team';
import SplitColumns from './components/SplitColumns';
import Reviews from './components/Reviews';
import LeftRightContent from "./components/LeftRightContent";
import OurCollection from './components/OurCollection';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Product />
      <HowItWorks />
      <Benefits />
      <LeftRightContent />
      <OurCollection />
      <Timeline />
      <Team />
      <SplitColumns />
      <Reviews />
    </div>
  );
}

export default App;
