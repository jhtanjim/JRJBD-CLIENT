import AddProducts from "../../AddProducts/AddProducts";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Category></Category>
      <AddProducts></AddProducts>
    </div>
  );
};

export default Home;
