import React from "react";
import "./featureh.css";

const Featureh = ({ title, text }) => {
  return (
    <div className="gpt3__featuresh-container__featureh">
      <div className="gpt3__featuresh-container__featureh-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="gpt3__featuresh-container__featureh-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Featureh;
