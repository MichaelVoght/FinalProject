import './Roster.css';
import React, { Component } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import roster from '../../assets/data/roster.json';

class Roster extends Component {
  render() {
    const rosterImageList = roster.data.map((character, ind) => {
      return (
        <Col key={ind} className='profile'>
          <img
            src={character.portrait}
            onClick={() => {
              this.props.updateTeam(character);
            }}
          ></img>
        </Col>
      );
    });

    return (
      <Col className='roster'>
        <h3 className='header'>Roster</h3>
        <Row xs={12} className='container'>
          {rosterImageList}
        </Row>
      </Col>
    );
  }
}

export default Roster;
