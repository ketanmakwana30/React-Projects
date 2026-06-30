import Card from "./Card.jsx";

const RightContent = ({ user = [] }) => {
  return (
    <div id="scroll" className="flex  h-full w-3/4 gap-6 overflow-x-auto pb-4">
      {user.map((elem, idx) => (
        <Card key={idx} id={idx} img={elem.img} tag={elem.tag} />
      ))}
    </div>
  );
};

export default RightContent;
