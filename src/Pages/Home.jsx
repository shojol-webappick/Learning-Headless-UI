import Banner from "../Components/Banner/Banner";
import Contact from "../Components/Contact/Contact";
import Faq from "../Components/FAQ/Faq";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
