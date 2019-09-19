import React from "react";
import PartyPanel from "./PartyPanel";
import Voters from "./Voters";

class App extends React.Component {
  state = {voted: []};
  onPanelVote = newVoter => {
    console.log(this.state.voted);
    const votedIDs = this.state.voted.map(voter => voter.id);
    if (!votedIDs.includes(newVoter.id)) {
      console.log(this.state.voted);
      console.log(newVoter.id);
      this.setState({voted: [...this.state.voted, newVoter]});
    }
  };

  render() {
    return (
      <div className="container">
        <div className="grid">
          <div className="panels">
            <PartyPanel
              party="APC"
              id="apc"
              onVote={this.onPanelVote.bind(this)}
              voted={this.state.voted}
            />

            <PartyPanel
              party="PDP"
              id="pdp"
              onVote={this.onPanelVote.bind(this)}
              voted={this.state.voted}
            />
          </div>
          <div className="voters">
            <Voters />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
