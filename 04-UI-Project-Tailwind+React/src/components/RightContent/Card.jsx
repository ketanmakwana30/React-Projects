import CardDets from "./CardDets";

const Card = ({ id, img, tag }) => {
  return (
    <div className="relative min-w-[18rem] h-[26rem] shrink-0 overflow-hidden rounded-[2rem] shadow-2xl">
      <img
        src={img}
        alt={`Card ${id + 1}`}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0  from-black/80 via-black/20 to-transparent" />
      <CardDets id={id + 1} tag={tag} />
    </div>
  );
};

export default Card;
