import Banner from "../Components/Banner/Banner";
import Blog from "../Components/Blog/Blog";
import Contact from "../Components/Contact/Contact";
import Faq from "../Components/FAQ/Faq";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Review from "../Components/Review/Review";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Blog />
      <Review />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
