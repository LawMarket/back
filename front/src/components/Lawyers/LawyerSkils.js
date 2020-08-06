import React from "react";
import { Link } from 'react-router-dom';

const LawyerSkils = ({lawyer :{firstName, lastName}, admin, lawyerKnow}) => {
  const goBack = admin ? 'lawyerstable': 'lawyerlist';
  return (
    <div className="lawyer-skils-container col-8">
      <div className="row justify-content-between mb-2">
      <h5 className="mb-3 text-right">נושאים בהם עו״ד {`${firstName} ${lastName}`} מתמצא הכי טוב</h5>
      <Link to={`/${goBack}`} className='btn btn-light'>
        חזור אחורה
          </Link>
      </div>
      <div className="row">
        <div class="Lawyer-card-skils mb-3 ml-3">
          <div class="Lawyer-card-inner">
            <div class="Lawyer-card-front align-items-center">
              <i className="far fa-heart heart-i"></i>
              <h4 style={{ fontWeight: "lighter" }}>דיני משפחה</h4>
            </div>
            <div class="Lawyer-card-back pt-4">
              <h4 className="text-right pr-4" style={{ fontWeight: "lighter" }}>
                דיני משפחה
              </h4>
              <ul className="lawyer-skils_ul text-right">
                <li>דמי הבראה</li>
                <li>פנסיה</li>
                <li>נסיעות</li>
              </ul>
              <a href="#"> עוד</a>
            </div>
          </div>
        </div>
        <div class="Lawyer-card-skils mb-3 ml-3">
          <div class="Lawyer-card-inner">
            <div class="Lawyer-card-front align-items-center">
              <i
                style={{ fontSize: "xx-large", paddingTop: "15px" }}
                class="fas fa-home"
              ></i>
              <h4 style={{ fontWeight: "lighter" }}>מקרקעין נדל״ן</h4>
            </div>
            <div class="Lawyer-card-back pt-4">
            <h4 className="text-right pr-4" style={{ fontWeight: "lighter" }}>
            מקרקעין נדל״ן
              </h4>
              <ul className="lawyer-skils_ul text-right">
                <li>דמי הבראה</li>
                <li>פנסיה</li>
                <li>נסיעות</li>
              </ul>
              <a href="#"> עוד</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div class="Lawyer-card-skils mb-3 ml-3">
          <div class="Lawyer-card-inner">
            <div class="Lawyer-card-front">
              <i
                style={{ fontSize: "xx-large", paddingTop: "15px" }}
                class="fas fa-money-bill-wave"
              ></i>
              <h4 style={{ fontWeight: "lighter" }}>הוצאה לפועל</h4>
            </div>
            <div class="Lawyer-card-back pt-4">
            <h4 className="text-right pr-4" style={{ fontWeight: "lighter" }}>
            הוצאה לפועל
              </h4>
              <ul className="lawyer-skils_ul text-right">
                <li>דמי הבראה</li>
                <li>פנסיה</li>
                <li>נסיעות</li>
              </ul>
              <a href="#"> עוד</a>
            </div>
          </div>
        </div>
        <div class="Lawyer-card-skils mb-3 ml-3">
          <div class="Lawyer-card-inner">
            <div class="Lawyer-card-front">
              <i
                style={{ fontSize: "xx-large", paddingTop: "15px" }}
                class="fas fa-tools"
              ></i>
                <h4 style={{ fontWeight: "lighter" }}>דיני עבודה</h4>
            </div>
            <div class="Lawyer-card-back pt-4">
            <h4 className="text-right pr-4" style={{ fontWeight: "lighter" }}>
                דיני עבודה
              </h4>
              <ul className="lawyer-skils_ul text-right">
                <li>דמי הבראה</li>
                <li>פנסיה</li>
                <li>נסיעות</li>
              </ul>
              <a href="#"> עוד</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerSkils;
