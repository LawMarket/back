import React from "react";

const style = {
    fontSize: 'small',
    color:'orange'
};
const Rating = () => {
  return (
    <div style={{display: 'flex', alignItems: 'baseline'}}>
        <div>
            <span className="fa fa-star" style={style}></span>
            <span className="fa fa-star" style={style}></span>
            <span className="fa fa-star" style={style}></span>
            <span className="fa fa-star" style={style}></span>
            <span className="fa fa-star" style={style}></span>
        </div>
        <div>
        <p style={{fontSize: 'x-small'}}>( 0 תגובות )</p>
        </div>
    </div>
  );
};

export default Rating;
