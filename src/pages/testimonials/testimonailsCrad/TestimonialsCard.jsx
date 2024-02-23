import StarIcon from "../../../assets/star-yellow-icon.svg";

const TestimonialsCard = ({ imgUrl, name, review, description }) => {
  return (
    <div className="bg-white rounded-md p-5 border mx-2">
      <div className="flex items-center gap-3 mb-4">
        <img
          src={imgUrl}
          alt={name}
          className="w-14 h-14 md:w-16 md:h-16 rounded-full"
        />

        <div>
          <p className="text-sm md:text-base mb-1">{name}</p>

          <div className="flex items-end gap-[2px]">
            <img src={StarIcon} className="w-4 h-4 object-contain" />
            <img src={StarIcon} className="w-4 h-4 object-contain" />
            <img src={StarIcon} className="w-4 h-4 object-contain" />
            <img src={StarIcon} className="w-4 h-4 object-contain" />
            <img src={StarIcon} className="w-4 h-4 object-contain" />
          </div>
        </div>
      </div>

      <h6 className="text-sm md:text-base font-medium mb-1">{review}</h6>

      <span className="text-sm md:text-[13px] text-slate-500">
        {description}
      </span>
    </div>
  );
};

export default TestimonialsCard;
