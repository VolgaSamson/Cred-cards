import CreditCardManagement from "../creditcardmanagement/creditcardmanagement";
import Footer from "../footer/footer";
import HeroSection from "../HeroSection/HeroSection";




const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection/>
      <CreditCardManagement/>
      <Footer/>
    </div>
  );
};

export default HomePage;
