import React from "react";
import Avatar from "./Avatar";
import P from "./P";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <P data={props.tel} />
        <P data={props.email} />
      </div>
    </div>
  );
}

export default Card;
