import Hero from "../../pages/hero/Hero";
import OurServices from "../../pages/ourServices/OurServices";
import OurWork from "../../pages/ourWork/OurWork";
import Stats from "../../pages/stats/Stats";

const Home = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <OurServices />
      <OurWork />
    </div>
  );
};

export default Home;
