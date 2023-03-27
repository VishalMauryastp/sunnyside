
import GraphicDekstop from "./components/GraphicDekstop";
import GraphicMobile from "./components/GraphicMobile";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import StandOut from "./components/StandOut";
import Transfrom from "./components/Transfrom";
import Testimonials from "./components/Testimonials";
import GridMobile from "./components/GridMobile";
import GridDekstop from "./components/GridDekstop";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Showcase />
      <div className="flex justify-center items-center lg:w-full">
      <Transfrom />
      </div>
      <div className="flex justify-center items-center">
      <StandOut />
      </div>
      

      <div className="block md:hidden">
        <GraphicMobile />
      </div>
      <div className="hidden md:block">
        <GraphicDekstop />
      </div>
      <Testimonials />
      <div className="block md:hidden">
        <GridMobile />
      </div>
      <div className="hidden md:block">
      <GridDekstop />
    </div>
    
    <Footer/>
   

    </>
  );
}

export default App;
