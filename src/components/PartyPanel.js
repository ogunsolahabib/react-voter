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
    let newFan = {
      name: document.querySelector(`#${this.props.party}-name`).value,
      id: document.querySelector(`#${this.props.party}-id`).value
    };

    let newList = [];
    if (
      voters.some(voter => {
        return voter.name === newFan.name && voter.id === newFan.id;
      }) &&
      this.props.voted.map(voter => voter.id).indexOf(newFan.id) === -1
    ) {
      this.props.onVote(newFan);
      newList.push(newFan);
      this.setState({fans: [...this.state.fans, newList]});
      document.querySelector(`#${this.props.party}-name`).value = "";
      document.querySelector(`#${this.props.party}-id`).value = "";
    } else if (
      voters.some(voter => {
        return voter.name === newFan.name && voter.id === newFan.id;
      }) &&
      this.props.voted.map(voter => voter.id).indexOf(newFan.id) !== -1
    ) {
      alert("You have voted earlier!");
    } else if (
      voters.some(voter => {
        return voter.name !== newFan.name || voter.id !== newFan.id;
      })
    ) {
      alert("Those don't match any of our records!");
    }
  };

  render() {
    return (
      <div>
        <div className="panel_name">{this.props.party}</div>
        <div className="count">{this.state.fans.length}</div>
        <div>
          <form onSubmit={this.onFormSubmit.bind(this)}>
            <div className="input_field">
              <label>Name: </label>
              <input
                id={`${this.props.party}-name`}
                type="text"
                name="voter"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="input_field">
              <label>Card No: </label>
              <input
                id={`${this.props.party}-id`}
                type="text"
                name="id"
                placeholder="Enter Card Number"
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
