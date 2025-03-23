import CanvasComponent from "../canvascomponent/canvascomponent";
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
      <Footer/>
    </div>
  );
};

export default HomePage;
