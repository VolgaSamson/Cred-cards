import CanvasComponent from "../canvascomponent/canvascomponent";
import CardCarousel from "../CardCarousel/cardcarousel";
import CreditCardManagement from "../creditcardmanagement/creditcardmanagement";
import Footer from "../footer/footer";
import HeroSection from "../HeroSection/HeroSection";
import MultipleCardComponent from "../multiplecardcomponent/multiplecardcomponent";




const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection/>
      <CreditCardManagement/>
      <MultipleCardComponent/>
      <CardCarousel/>
      <Footer/>
    </div>
  );
};

export default HomePage;
