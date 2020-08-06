import React from "react";
import "./FlipCardCss.scss";
import nadlanImage from '../../images/nadlan1.png';
import lpoalImage from '../../images/lpoal1.png';
import criativImage from '../../images/criativ1.png';
import hescmimImage from '../../images/hescmim.png';
import layazamImage from '../../images/layazam.png';
import risumhevraImage from '../../images/risumhevra.png';
import hesbonotImage from '../../images/hesbonot.png';
import homeImage from '../../images/home.png';
import calcliImage from '../../images/calcli.png';


const FlipCard = () => {
    return (
        <div className="container mb-5">
        <h3 className="text-center mb-5 mt-5">חלוקת נושאים ראשונה</h3>
        <div className="row justify-content-center">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front ">
              <span className="test">
                100$
              </span>
              <img
                src={lpoalImage}
                alt="Avatar"
                style={{ width: "300px", height: "300px" }}
              />
              <div className="test1">
                <h4 style={{ color: "#fff" }}>
                  הוצאה לפועל
                </h4>
              </div>
            </div>
            <div className="flip-card-back">
              <span style={priceSpanBack}>100$</span>
              <div className="d-flex justify-content-start">
                <h4
                  style={{
                    paddingTop: "30px",
                    paddingRight: "10px",
                  }}
                >
                  {" "}
                  הוצאה לפועל
                </h4>
              </div>
              <div style={{ direction: "rtl", textAlign: "right" }}>
                <ul>
                  <li style={{ color: "Blue" }}>
                    <span style={spanPoints}>שחרור עיקולים</span>
                  </li>
                  <li style={{ color: "blue" }}>
                    <span style={spanPoints}>
                      פשיטת רגל
                    </span>
                  </li>
                  <li style={{ color: "blue" }}>
                    <span style={spanPoints}>הנחות חובות</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front ">
              <span className="test">
                100$
              </span>
              <img
                src={nadlanImage}
                alt="Avatar"
                style={{ width: "300px", height: "300px" }}
              />
              <div className="test1">
                <h4 style={{ color: "#ffffff" }}>
                מקרקעין נדל״ן

                </h4>
              </div>
            </div>
            <div className="flip-card-back">
              <span style={priceSpanBack}>100$</span>
              <div className="d-flex justify-content-start">
                <h4
                  style={{
                    paddingTop: "30px",
                    paddingRight: "10px",
                  }}
                >
                  {" "}
                  מקרקעין נדל״ן
                </h4>
              </div>
              <div style={{ direction: "rtl", textAlign: "right" }}>
                <ul>
                  <li style={{ color: "Blue" }}>
                    <span style={spanPoints}>ירושה</span>
                  </li>
                  <li style={{ color: "blue" }}>
                    <span style={spanPoints}>
                      קנייה בתים ומכירה
                    </span>
                  </li>
                  <li style={{ color: "blue" }}>
                    <span style={spanPoints}> שחרור קרקעות</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front ">
              <span className="test">
                100$
              </span>
              <img
                src={hescmimImage}
                alt="Avatar"
                style={{ width: "300px", height: "300px" }}
              />
              <div className="test1">
                <h4 style={{ color: "#fff" }}>
                {" "}
                  הסכמים
                </h4>
              </div>
            </div>
            <div className="flip-card-back">
              <span style={priceSpanBack}>100$</span>
              <div className="d-flex justify-content-start">
                <h4
                  style={{
                    paddingTop: "30px",
                    paddingRight: "10px",
                  }}
                >
                  {" "}
                  הסכמים
                </h4>
              </div>
              <div style={{ direction: "rtl", textAlign: "right" }}>
                <ul>
                  <li style={{ color: "Blue" }}>
                    <span style={spanPoints}>פיצוי פיטורין</span>
                  </li>
                  <li style={{ color: "blue" }}>
                    <span style={spanPoints}>
                      דמי הבראה,טקסט חופשי,טקסט חופשי
                    </span>
                  </li>
                  <li style={{ color: "blue" }}>
                    <span style={spanPoints}>הלנת שכר,טקסט חופשי</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="row justify-content-center">

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front ">
              <span className="test">
                100$
              </span>
              <img
                src={homeImage}
                alt="Avatar"
                style={{ width: "300px", height: "300px" }}
                />
              <div className="test1">
                <h4 style={{ color: "#fff" }}>
               הסכמים בנושא רכוש
                </h4>
              </div>
            </div>
            <div className="flip-card-back">
              <span style={priceSpanBack}>100$</span>
              <div className="d-flex justify-content-start">
                <h4
                  style={{
                      paddingTop: "30px",
                      paddingRight: "10px",
                    }}
                    >
                  {" "}
                  הסכמים בנושא רכוש
                </h4>
              </div>
              <div style={{ direction: "rtl", textAlign: "right" }}>
                <ul>
                  <li style={{ color: "Blue" }}>
                    <span style={spanPoints}>פיצוי פיטורין</span>
                  </li>
                  <li style={{ color: "blue" }}>
                    <span style={spanPoints}>
                      דמי הבראה,טקסט חופשי,טקסט חופשי
                    </span>
                  </li>
                  <li style={{ color: "blue" }}>
                    <span style={spanPoints}>הלנת שכר,טקסט חופשי</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front ">
              <span className="test">
                100$
              </span>
              <img
                src={risumhevraImage}
                alt="Avatar"
                style={{ width: "300px", height: "300px" }}
                />
              <div className="test1">
                <h4  style={{ color: "#fff" }}>
                  רישום חברה
                </h4>
              </div>
            </div>
            <div className="flip-card-back">
              <span style={priceSpanBack}>100$</span>
              <div className="d-flex justify-content-start">
                <h4
                  style={{
                      paddingTop: "30px",
                      paddingRight: "10px",
                    }}
                    >
                  {" "}
                  רישום חברה
                </h4>
              </div>
              <div style={{ direction: "rtl", textAlign: "right" }}>
                <ul>
                  <li style={{ color: "Blue" }}>
                    <span style={spanPoints}>פיצוי פיטורין</span>
                  </li>
                  <li style={{ color: "blue" }}>
                    <span style={spanPoints}>
                      דמי הבראה,טקסט חופשי,טקסט חופשי
                    </span>
                  </li>
                  <li style={{ color: "blue" }}>
                    <span style={spanPoints}>הלנת שכר,טקסט חופשי</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front ">
              <span className="test">
                100$
              </span>
              <img
                src={layazamImage}
                alt="Avatar"
                style={{ width: "300px", height: "300px" }}
                />
              <div className="test1">
                <h4 style={{ color: "#fff" }}>
                  שירות ליזם
                </h4>
              </div>
            </div>
            <div className="flip-card-back">
              <span style={priceSpanBack}>100$</span>
              <div className="d-flex justify-content-start">
                <h4
                  style={{
                      paddingTop: "30px",
                      paddingRight: "10px",
                    }}
                    >
                  {" "}
                  שירות ליזם
                </h4>
              </div>
              <div style={{ direction: "rtl", textAlign: "right" }}>
                <ul>
                  <li style={{ color: "Blue" }}>
                    <span style={spanPoints}>פיצוי פיטורין</span>
                  </li>
                  <li style={{ color: "blue" }}>
                    <span style={spanPoints}>
                      דמי הבראה,טקסט חופשי,טקסט חופשי
                    </span>
                  </li>
                  <li style={{ color: "blue" }}>
                    <span style={spanPoints}>הלנת שכר,טקסט חופשי</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="row justify-content-center">

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front ">
              <span className="test">
                100$
              </span>
              <img
                src={criativImage}
                alt="Avatar"
                style={{ width: "300px", height: "300px" }}
                />
              <div className="test1">
                <h4 style={{ color: "#fff" }}>
                קריאטיב
                </h4>
              </div>
            </div>
            <div className="flip-card-back">
              <span style={priceSpanBack}>100$</span>
              <div className="d-flex justify-content-start">
                <h4
                  style={{
                      paddingTop: "30px",
                      paddingRight: "10px",
                    }}
                    >
                  {" "}
                  קריאטיב
                </h4>
              </div>
              <div style={{ direction: "rtl", textAlign: "right" }}>
                <ul>
                  <li style={{ color: "Blue" }}>
                    <span style={spanPoints}>פיצוי פיטורין</span>
                  </li>
                  <li style={{ color: "blue" }}>
                    <span style={spanPoints}>
                      דמי הבראה,טקסט חופשי,טקסט חופשי
                    </span>
                  </li>
                  <li style={{ color: "blue" }}>
                    <span style={spanPoints}>הלנת שכר,טקסט חופשי</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front ">
              <span className="test">
                100$
              </span>
              <img
                src={hesbonotImage}
                alt="Avatar"
                style={{ width: "300px", height: "300px" }}
                />
              <div className="test1">
                <h4 style={{ color: "#fff" }}>
                  הנהלת חשבונות
                </h4>
              </div>
            </div>
            <div className="flip-card-back">
              <span style={priceSpanBack}>100$</span>
              <div className="d-flex justify-content-start">
                <h4
                  style={{
                      paddingTop: "30px",
                      paddingRight: "20px",
                    }}
                    >
                  {" "}
                  הנהלת חשבונות
                </h4>
              </div>
              <div style={{ direction: "rtl", textAlign: "right" }}>
                <ul>
                  <li style={{ color: "Blue" }}>
                    <span style={spanPoints}>פיצוי פיטורין</span>
                  </li>
                  <li style={{ color: "blue" }}>
                    <span style={spanPoints}>
                      דמי הבראה,טקסט חופשי,טקסט חופשי
                    </span>
                  </li>
                  <li style={{ color: "blue" }}>
                    <span style={spanPoints}>הלנת שכר,טקסט חופשי</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front ">
              <span className="test">
                100$
              </span>
              <img
                src={calcliImage}
                alt="Avatar"
                style={{ width: "300px", height: "300px" }}
                />
              <div className="test1">
                <h4 style={{ color: "#fff" }}>
                  ייעוץ כלכלי
                </h4>
              </div>
            </div>
            <div className="flip-card-back">
              <span style={priceSpanBack}>100$</span>
              <div className="d-flex justify-content-start">
                <h4
                  style={{
                      paddingTop: "30px",
                      paddingRight: "10px",
                    }}
                    >
                  {" "}
                  ייעוץ כלכלי
                </h4>
              </div>
              <div style={{ direction: "rtl", textAlign: "right" }}>
                <ul>
                  <li style={{ color: "Blue" }}>
                    <span style={spanPoints}>פיצוי פיטורין</span>
                  </li>
                  <li style={{ color: "blue" }}>
                    <span style={spanPoints}>
                      דמי הבראה,טקסט חופשי,טקסט חופשי
                    </span>
                  </li>
                  <li style={{ color: "blue" }}>
                    <span style={spanPoints}>הלנת שכר,טקסט חופשי</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
        );
}


export default FlipCard;



const priceSpanBack = {
    color: '#fff',
  position: "absolute",
  background: "black",
  top: "10px",
  left: "-40px",
  transform: "rotate(-30deg)",
  width: "50%",
  textAlign: "center",
};

const frontDiv = {
  display: "flex",
};

const spanPoints = {
  color: "black",
};
