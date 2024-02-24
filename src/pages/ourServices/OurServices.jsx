import { SERVICES } from "../../utils/data/data";
import ServicesCard from "./servicesCard/ServicesCard";

const OurServices = () => {
  return (
    <section id="services" className="max-w-[1200px] py-16 mx-auto">
      <h5 className="text-2xl font-semibold text-darkBlue text-center mb-10">
        Our Services
      </h5>

      <div className="bg-white lg:shadow-xl lg:shadow-slate-200/50">
        {SERVICES.map((item) => (
          <ServicesCard
            key={item.title}
            imgUrl={item.imgUrl}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default OurServices;
