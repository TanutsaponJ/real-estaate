import Hero from "../../pages/hero/Hero";
import OurServices from "../../pages/ourServices/OurServices";
import OurWork from "../../pages/ourWork/OurWork";
import Stats from "../../pages/stats/Stats";
import Testimonials from "../../pages/testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <OurServices />
      <OurWork />
      <Testimonials />
    </div>
  );
};

export default Home;
