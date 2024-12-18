import About from "../About/About";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChooseUs from "../ChooseUs/ChooseUs";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Category></Category>
      <ChooseUs/>
    </div>
  );
};

export default Home;
