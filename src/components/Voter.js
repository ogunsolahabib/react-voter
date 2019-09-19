import React from "react";

const Voter = props => {
  return (
    <div>
      <div>
        <span className="voter_name">{props.name.toUpperCase()}</span>
        <span className="voter_id">#{props.cardNum}</span>
      </div>
    </div>
  );
};

export default Voter;
