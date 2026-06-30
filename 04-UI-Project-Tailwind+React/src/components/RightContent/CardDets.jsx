import { RiArrowRightLine } from "@remixicon/react";

const CardDets = ({ id, tag }) => {
  return (
    <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
      <div className="flex items-start justify-between">
        <span className="bg-white text-black text-base font-semibold rounded-full h-10 w-10 flex items-center justify-center">
          {id}
        </span>
      </div>

      <div className="flex flex-col gap-5">
        <p className="text-sm leading-6 opacity-90">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
          accusamus cupiditate voluptatibus mollitia alias tempora.
        </p>
        <div className="flex items-center justify-between gap-4">
          <button className="bg-blue-600 text-white font-medium px-6 py-2 rounded-full shadow-lg">
            {tag}
          </button>
          <button className="bg-blue-300/10 text-white font-medium p-3 rounded-full shadow-lg backdrop-blur-sm">
            <RiArrowRightLine size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDets;
