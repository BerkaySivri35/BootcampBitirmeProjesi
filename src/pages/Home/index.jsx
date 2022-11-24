
import Navbar from '../../Components/Navbar';
import Carousel from '../../Components/Carousel';
import FlightSearch from '../../Components/FlightSearch';
import Main from '../../Components/Main';
import Footer from '../../Components/Footer';


export function HomePage() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <FlightSearch />
      <Main />
      <Footer />
    </div>
  );
}
