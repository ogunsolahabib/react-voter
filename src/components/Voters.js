import React from "react";
import Voter from "./Voter";
const votersArray = [
  {name: "habib", id: "123"},
  {name: "segun", id: "456"},
  {name: "yomi", id: "789"},
  {name: "dimola", id: "369"}
];
const Voters = () => {
  return votersArray.map(voter => {
    return (
      <div>
        <Voter key={voter.id} name={voter.name} />
      </div>
    );
  });
};
export default Voters;
