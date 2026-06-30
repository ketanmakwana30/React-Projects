import Arrow from "./Arrow";
import HeroText from "./HeroText";

const LeftContent = () => {
  return (
    <div className="flex flex-col h-full justify-between w-1/4">
      <HeroText />
      <Arrow />
    </div>
  );
};

export default LeftContent;
