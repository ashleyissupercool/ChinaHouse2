import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import Hero from "../components/homePage/Hero.jsx";
import Highlights from "../components/homePage/Highlights.jsx";
import Location from "../components/homePage/Location.jsx";
import Faq from "../components/homePage/Faq.jsx";

function HomePage() {
  return (
    <>
      <Header />
      <div id="home" className="mt-10 md:mt-[150px]"/>
      <Hero />
      <div className="mt-16 md:mt-[150px]"/>
      <Highlights />
      <div className="mt-16 md:mt-[120px]"/>
      <Location />
      <div className="mt-16 md:mt-[120px]"/>
      <Faq />
      <div className="mt-16 md:mt-[120px]"/>
      <Footer />
    </>
  );
}

export default HomePage;
