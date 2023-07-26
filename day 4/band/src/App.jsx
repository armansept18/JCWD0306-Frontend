import "./App.css";
import Carousel from "./components/carousel";
import BandMembers from "./components/member";
import Navbar from "./components/navbar";
import Tour from "./components/tour";
import "./style.css";
import Map from "./assets/map.jpg";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <center>
        <Carousel></Carousel>
        <BandMembers />
      </center>
      <Tour />
      <img src={Map} alt="" width="100%" />
    </div>
  );
}

export default App;
