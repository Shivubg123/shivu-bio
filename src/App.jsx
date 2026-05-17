import biodata from './config/biodata.json';
import { Hero } from './components/Hero/Hero';
import { InfoSection } from './components/InfoSection/InfoSection';
import { Gallery } from './components/Gallery/Gallery';
import { Connect } from './components/Connect/Connect';
import { Location } from './components/Location/Location';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero image={biodata.groom.image} name={biodata.groom.name} />
      <InfoSection groom={biodata.groom} />
{/*       <Gallery gallery={biodata.gallery} /> */}
      <Location address={biodata.groom.address} name={biodata.groom.name} />
      <Connect connections={biodata.connections} groomName={biodata.groom.name} />
    </div>
  );
}

export default App;

