import React from "react";
import "./App.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="Avatar" style={{ width: "100%" }}></img>
      <div className="container">
        <div>
          <b>{props.name}</b>
        </div>
        <div>{props.position}</div>
      </div>
      <button
        className="button"
        style={{ backgroundColor: "#000" }}
        onClick={props.onDetailsChanged}
      >
        Change Details
      </button>
      <br></br>

      <button
        className="button button1"
        onClick={() =>
          alert(
            `You clicked "Accept"!\nFull Name: ${props.name}\nPosition: ${props.position}\nImage Link: ${props.image}`
          )
        }
      >
        Accept
      </button>
      <button className="button button2">Cancel</button>
    </div>
  );
};

export default Card;
