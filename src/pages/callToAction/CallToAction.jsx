import HouseImg from "../../assets/house-img.png";

const CallToAction = () => {
  return (
    <div className="bg-secondary">
      <div className="max-w-[1200px] h-auto mx-auto flex flex-col items-start md:h-[400px] md:flex-row min-[1090px]:h-[320px]">
        <img
          src={HouseImg}
          alt="house"
          className="w-full md:w-1/2 md:h-full object-cover"
        />

        <div className="p-10">
          <h5 className="text-lg font-medium text-darkBlue mb-2 lg:mb-4">
            Find Out What It Costs
          </h5>

          <p className="text-sm text-darkBlue leading-6 text-justify mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            deserunt dolorem eaque autem molestias non maxime qui eligendi, iste
            vel ea in, ducimus nulla sunt reiciendis explicabo, itaque dolorum
            a?
          </p>

          <button className="primary-btn">GET ESTIMATION</button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
