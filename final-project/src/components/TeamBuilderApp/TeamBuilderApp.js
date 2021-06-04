import React, { Component } from 'react';
import Roster from '../Roster/Roster';
import Team from '../Team/Team';
import TeamAbilities from '../TeamAbilities/TeamAbilities';
import Container from 'react-bootstrap/esm/Container';

class TeamBuilderApp extends Component {
  constructor(props) {
    super(props);
    this.updateTeam = this.updateTeam.bind(this);
    this.state = {
      team: [],
    };
  }

  updateTeam = (character) => {
    var copy = [...this.state.team];
    var ind = copy.findIndex((item) => character === item);
    //If character is already in teams remove from teams
    //Else add them to teams
    if (ind > -1) {
      copy.splice(ind, 1);
      this.setState({
        team: copy,
      });
    } else if (copy.length < 5) {
      this.setState({
        team: [...this.state.team, character],
      });
    }
  };

  render() {
    return (
      <Container>
        <Roster team={this.state.team} updateTeam={this.updateTeam} />
        <Team team={this.state.team} updateTeam={this.updateTeam} />
        <TeamAbilities team={this.state.team} />
      </Container>
    );
  }
}

export default TeamBuilderApp;
