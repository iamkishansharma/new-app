import React from "react";
import "./App.css";

const Card = (props) => {
  return (
    <div class="card">
      <img src={props.image} alt="Avatar" style={{ width: "100%" }}></img>
      <div class="container">
        <p>
          <b>{props.name}</b>
        </p>
        <p>{props.position}</p>
      </div>

      <button class="button button1" onClick="alert(1)">Accept</button>
      <button class="button button2">Cancel</button>
    </div>
  );
};

export default Card;
