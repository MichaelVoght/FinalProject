import './Team.css';
import React, { Component } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

class Team extends Component {
  render() {
    const teamList = this.props.team.map((character, ind) => {
      return (
        <Col key={ind} className='character'>
          <img
            src={character.portrait}
            onClick={() => {
              this.props.updateTeam(character);
            }}
          ></img>
          <div className='name'>{character.name}</div>
        </Col>
      );
    });
    return (
      <Col className='team'>
        <h3 className='header'>Team</h3>
        <Row xs={5} className='container'>
          {teamList}
        </Row>
      </Col>
    );
  }
}

export default Team;
