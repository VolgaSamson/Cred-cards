import CanvasComponent from "../canvascomponent/canvascomponent";
import CardCarousel from "../CardCarousel/cardcarousel";
import CreditCardManagement from "../creditcardmanagement/creditcardmanagement";
import DataProtection from "../dataprotection/dataprotection";
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
      <DataProtection/>
      <Footer/>
    </div>
  );
};

export default HomePage;
