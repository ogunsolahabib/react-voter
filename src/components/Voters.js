import React from "react";
import Voter from "./Voter";
const votersArray = [
  {name: "habib", id: "123"},
  {name: "segun", id: "456"},
  {name: "yomi", id: "789"},
  {name: "dimola", id: "369"}
];
const Voters = () => {
  const VotersList = votersArray.map(voter => {
    return (
      <div key={voter.id}>
        <Voter name={voter.name} cardNum={voter.id} />
      </div>
    );
  });
  return (
    <div>
      <h1>Eligible Voters</h1>
      {VotersList}
    </div>
  );
};
export default Voters;
