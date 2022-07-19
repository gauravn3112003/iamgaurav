import React from "react";

const CardCount = (props) => {
  return (
    <>
      <div className="cardsCounts mx-3">
        <div className="title">{props.title}</div>
        <div className="counts">{props.counts}</div>
        <button className="count-btn">{props.btn}</button>
      </div>
    </>
  );
};

export default CardCount;
