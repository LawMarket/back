import React from "react";
import './Layout.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm d-flex justify-content-center" style={{borderBottom: '0.5px solid #626262', padding: '1rem'}}>
     {/*  <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button> */}
      <div className=" justify-content-center" >
        <ul className="navbar-nav nav-class">
          <li className="nav-item dropdown">
            <a  data-toggle="dropdown" href="#">
              דיני נזיקין
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                רכוש
              </a>
              <a className="dropdown-item" href="#">
               קרקעות
              </a>
              <a className="dropdown-item" href="#">
                ירושה
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a data-toggle="dropdown" href="#">
              דיני משפחה
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item " href="#">
                גירושים
              </a>
              <a className="dropdown-item" href="#">
                גישורים
              </a>
              <a className="dropdown-item" href="#">
                הסכם ממון
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a data-toggle="dropdown" href="#">
              דיני עבודה
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
               פיצויים
              </a>
              <a className="dropdown-item" href="#">
                פנסייה
              </a>
              <a className="dropdown-item" href="#">
               הבראה
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a data-toggle="dropdown" href="#">
              דיני תעבורה
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                עבירות תנועה
              </a>
              <a className="dropdown-item" href="#">
                תאונות
              </a>
              <a className="dropdown-item" href="#">
                ביטוחים
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a data-toggle="dropdown" href="#">
              מקרקעין נדל״ן
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                חוזה השכרה
              </a>
              <a className="dropdown-item" href="#">
                חוזה מכירה
              </a>
              <a className="dropdown-item" href="#">
                תמ״א 
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a data-toggle="dropdown" href="#">
              הוצאה לפועל
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                חובות
              </a>
              <a className="dropdown-item" href="#">
                פשיטת רגל
              </a>
              <a className="dropdown-item" href="#">
                הנחה בחובות
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
