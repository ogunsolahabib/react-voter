import React from "react";
class PartyPanel extends React.Component {
  state = {fans: []};

  onFormSubmit = e => {
    e.preventDefault();
    const voters = [
      {name: "habib", id: "123"},
      {name: "segun", id: "456"},
      {name: "yomi", id: "789"},
      {name: "dimola", id: "369"}
    ];
    const voterIds = voters.map(voter => voter.id);
    const voterNames = voters.map(voter => voter.name);
    let newFan = {
      name: document.querySelector(`#${this.props.party}-name`).value,
      id: document.querySelector(`#${this.props.party}-id`).value
    };

    let newList = [];

    const votedIds = this.props.voted.map(voter => voter.id);
    console.log(votedIds);

    if (
      voterIds.indexOf(newFan.id) !== -1 &&
      voterNames.indexOf(newFan.name) !== -1 &&
      this.props.voted.map(voter => voter.id).indexOf(newFan.id) === -1
    ) {
      this.props.onVote(newFan);

      newList.push(newFan);

      this.setState({fans: [...this.state.fans, newList]});
      document.querySelector(`#${this.props.party}-name`).value = "";
      document.querySelector(`#${this.props.party}-id`).value = "";
    }
  };

  render() {
    return (
      <div>
        <div className="panel_name">{this.props.party}</div>
        <div className="count">{this.state.fans.length}</div>
        <div>
          <form onSubmit={this.onFormSubmit.bind(this)}>
            <label>Voter's Name</label>
            <div>
              <input
                id={`${this.props.party}-name`}
                type="text"
                name="voter"
                placeholder="Enter Your Name"
              />
            </div>
            <label>Voter's ID</label>
            <div>
              <input
                id={`${this.props.party}-id`}
                type="text"
                name="id"
                placeholder="Enter ID"
              />
            </div>

            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    );
  }
}
export default PartyPanel;
