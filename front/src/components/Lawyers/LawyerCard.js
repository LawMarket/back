import React from "react";
import { Link } from 'react-router-dom';
import image from "./userpic.jpeg";

const LawyerCard = ({
    profile: {
        lawyer: { _id, firstName, lastName },
        skills,
        lawyerKnow
    }
}) => {
  return (
    <div className="col-2 lawyer-item">
    <div className="lawyer-card-header row">
      <div className="image-container">
        <img
          src={image}
          className="rounded-circle"
          width="70px"
          height="70px"
        />
      </div>
      <div className="layer-details">
        <ul className="lawyer-details_ul">
          <li className="lawyer-name">
            <Link to={`/lawyeritem/${_id}`} className="lawyer-link-color">
            {`${firstName} ${lastName}`}
            </Link>
          </li>
          <li className="lawyer-know"> {`עו״ד ל${lawyerKnow}`} </li>
          <li className="lawyer-price">
            עלות שירות: <a style={{color: '#08b9e3'}}>100$</a>{" "}
          </li>
        </ul>
      </div>
    </div>
    <div className="lawyer-skils">
      <ul className="lawyer-skils_ul">
      {skills.slice(0, 4).map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
    <Link to={`/lawyeritem/${_id}`} className="lawyer-link-color"> עוד</Link>
  </div>
  );
};

export default LawyerCard;
