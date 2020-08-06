import React, { useState, Fragment, useEffect } from "react";
import { Link, withRouter, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { updateLawyer } from '../../../actions/admin';
import { getCurrentProfileby } from '../../../actions/profile';

const AdminEditLawyer = ({ profile: {profile, loading}, updateLawyer, getCurrentProfileby, history, auth: { user, isAuthenticated, lawyer }, match }) => {
  const [formData, setFormData] = useState({
    lawyerKnow:"",
      experience:"",
      location: "",
      bio: "",
      skills: "",
      workReady:"",
      reactTime:""
  });

  useEffect(()=>{
    getCurrentProfileby(match.params.id)
    setFormData({
      lawyerKnow: loading || !profile.lawyerKnow ? '' : profile.lawyerKnow,
      experience: loading || !profile.experience ? '' : profile.experience,
      location: loading || !profile.location ? '' : profile.location,
      bio: loading || !profile.bio ? '' : profile.bio,
      skills: loading || !profile.skills ? '' : profile.skills.join(','),
      workReady: loading || !profile.workReady ? '' : profile.workReady,
      reactTime: loading || !profile.reactTime ? '' : profile.reactTime,
    });
  },[getCurrentProfileby, loading, match.params.id]);

  const lawyersKnow = {
    diniAvoda:"דיני עבודה",
    diniNezikin:"דיני נזיקין",
    diniMispaha:"דיני משפחה",
    diniTabora:"דיני תעבורה",
    diniNadlan:"מקרקעין נדל״ן",
    diniHozaLpoal:"הוצאה לפועל"
  }

  
  /* const {
    lawyerKnow,
    experience,
    location,
    bio,
    skills,
    workReady,
    reactTime,
  } = formData; */

  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

  const onSubmit = e => {
    e.preventDefault()
    updateLawyer(formData, history, true, match.params.id)
  };

  if (!isAuthenticated || user || lawyer) {
    return <Redirect to="/" />
  }

 

  return (
    <div className="mt-5">
            <div className="text-center">
          <h1 className="large text-primary">צור פרופיל </h1>
          <p className="lead">
            צור פרופיל על מנת שלקוחות יכירו אותך <i className="fas fa-user" /> 
          
          </p>
            </div>
            <div className="row justify-content-center mb-3">
          <form className="form text-center" onSubmit={e => onSubmit(e)}>
            <div className="form-group">
              <select name="lawyerKnow" value={formData.lawyerKnow} onChange={e => onChange(e)}>
                <option value="0">* בחר את תחום תעסוקתך</option>
                <option value={lawyersKnow.diniAvoda} >דיני עבודה</option>
                <option value={lawyersKnow.diniNezikin}>דיני נזיקין</option>
                <option value={lawyersKnow.diniMispaha}>דיני משפחה</option>
                <option value={lawyersKnow.diniTabora}>דיני תעבורה</option>
                <option value={lawyersKnow.diniNadlan}>מקרקעין נדל״ן</option>
                <option value={lawyersKnow.diniHozaLpoal}>הוצאה לפועל</option>
              </select>
              <small className="form-text">

              </small>
            </div>
            <div className="form-group">
              <input type="text" placeholder="שנות ניסיון" name="experience" value={formData.experience} onChange={e => onChange(e)} />
              <small className="form-text">
                ניסיון בעיסוקך
              </small>
            </div>
            <div className="form-group">
              <input type="text" placeholder="אזור מגורים" name="location" value={formData.location} onChange={e => onChange(e)}/>
              <small className="form-text">
                מאיפה בארץ
              </small>
            </div>
            <div className="form-group">
              <input type="text" placeholder="* כישורים" name="skills" value={formData.skills} onChange={e => onChange(e)}/>
              <small className="form-text">
              הוסף פסיק בין כישור לכישור לדוגמא (הבראה, פיצויים, פנסיה)
              </small>
            </div>
            
            <div className="form-group">
              <textarea placeholder="ספר על עצמך" name="bio" value={formData.bio} onChange={e => onChange(e)}/>
              <small className="form-text">ספר על עצמך בקצרה </small>
            </div>
            <div className="form-group">
              <input type="text" placeholder="עבודה מכונה תוך " name="workReady" value={formData.workReady} onChange={e => onChange(e)}/>
              <small className="form-text">
                  כמה ימי עסקים עד שהעבודה תהיה מוכנה
              </small>
            </div>
            <div className="form-group">
              <input type="text" placeholder="זמן שבו תגיב למשתמש" name="reactTime" value={formData.reactTime} onChange={e => onChange(e)}/>
              <small className="form-text">
                זמן תגובה למשתמש בשעות, ימים
              </small>
            </div>
            <input type="submit" className="btn btn-primary my-1" value="שלח" />
            <Link className="btn btn-light my-1" to="/lawyerdashboard">
             חזור אחורה
            </Link>
          </form>
          </div>
        </div>
  );
};


const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth,
});


export default connect(mapStateToProps, { updateLawyer, getCurrentProfileby })(withRouter(AdminEditLawyer));
