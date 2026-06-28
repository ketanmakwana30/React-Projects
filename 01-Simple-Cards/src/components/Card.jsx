import profile from "../data";

const Card = () => {
  return (
    <div className="cards-list">

      {profile.map((pro) => (
        <div className="card" key={pro.id}>
          <div className="image">
            <img src={pro.image} alt={pro.name} />
          </div>
          <h1 className="title">{pro.name}</h1>
          <p className="role">{pro.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
