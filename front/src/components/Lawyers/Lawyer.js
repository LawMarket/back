import React from "react";
import { Link } from "react-router-dom";

const Lawyer = ({
  profile: {lawyerKnow, lawyerPrice, layerPic, skils, lawyer:{_id , firstName, lastName} },
}) => {
  return (
    <div className="lw-card card1">
      <div className="card-head">
        <div className="lw-image"></div>
      </div>
      <div className="lw-about">
        <h1>{`${firstName} ${lastName}`}</h1>
        <p className="lw-title">{lawyerKnow}</p>
        <Link to={`/lawyeritem/${_id}`}>
          <button
            type="button"
            className="btn btn-primary"
            style={{
              borderColor: "rgb(8, 185, 227)",
              backgroundColor: "rgb(8, 185, 227)",
            }}
          >
            לעוד פרטים
          </button>
        </Link>
      </div>
    </div>

);
};

export default Lawyer;

/*  <div className="profile bg-light">
  <img src={layerPic} alt="" className="round-img" />
  <div>
    <h2>{lawyerName}</h2>
    
    <p className="my-1"> {lawyerKnow} </p>
    <Link to={`/profile/${_id}`} className="btn btn-primary">
      View Profile
    </Link>
  </div>
  <ul>
    {skils.slice(0, 4).map((skill, index) => (
      <li key={index} className="text-primary">
        <i className="fas fa-check" /> {skill}
      </li>
    ))}
  </ul>
</div> */