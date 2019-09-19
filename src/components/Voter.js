import React from "react";

const Voter = props => {
  return (
    <div>
      <div>Name: {props.name.toUpperCase()}</div>
      <div>ID: {props.key}</div>
    </div>
  );
};

export default Voter;
