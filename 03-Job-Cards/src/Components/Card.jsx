import { Bookmark } from "lucide-react";

const Card = ({ image, company, role, time, tag1, tag2, salary, location }) => {
  return (
    <>
      <div className="card">
        <div>
          <div className="top">
            <img src={image} alt={company} />
            <button>
              Save <Bookmark size={15} />
            </button>
          </div>

          <div className="center">
            <h3>
              {company} <span>{time}</span>
            </h3>
            <h2>{role}</h2>
            <div className="tag">
              <h4>{tag1}</h4>
              <h4>{tag2}</h4>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h3>{salary}</h3>
            <p>{location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </>
  );
};

export default Card;
