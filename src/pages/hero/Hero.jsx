import HeroIMG1 from "../../assets/hero-img-1.png";
import HeroIMG2 from "../../assets/hero-img-2.png";
import HeroIMG3 from "../../assets/hero-img-3.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="max-w-screen-xl flex flex-col-reverse gap-12 items-center mx-auto py-16 px-6 md:flex-row"
    >
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gradient mb-3 md:text-4xl md:leading-[3rem] lg:text-5xl lg:leading-[4rem]">
          Building Dreams, Crafting Homes
        </h2>

        <p className="text-sm leading-6 text-darkBlue mb-6 md:w-4/5">
          Turning dreams into homes. Explore our exception craftsmanship and
          envision your perfect space.
        </p>

        <button className="primary-btn">Explore Our Projects</button>
      </div>

      <div className="flex gap-2 justify-center md:gap-3 lg:gap-5">
        <img src={HeroIMG1} alt="img-one" className="hero-img" />
        <img src={HeroIMG2} alt="img-two" className="mt-[5%] hero-img" />
        <img src={HeroIMG3} alt="img-three" className="hero-img" />
      </div>
    </section>
  );
};

export default Hero;
