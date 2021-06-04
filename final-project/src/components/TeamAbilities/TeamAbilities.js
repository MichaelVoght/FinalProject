import './TeamAbilities.css';
import React, { Component } from 'react';
import Ability from './Ability/Ability';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

class TeamAbilities extends Component {
  render() {
    const abilityList = this.props.team.map((character, ind) => {
      const kit = character.abilityKit;
      return (
        <Col key={ind} className='kit'>
          <Ability abilityType='Basic' kit={kit.basic}></Ability>
          <br />
          <Ability abilityType='Special' kit={kit.special}></Ability>
          <br />
          <Ability abilityType='Ultimate' kit={kit.ultimate}></Ability>
          <br />
          <Ability abilityType='Passive' kit={kit.passive}></Ability>
        </Col>
      );
    });
    return (
      <Col>
        <Row xs={6} className='abilities'>
          {abilityList}
        </Row>
      </Col>
    );
  }
}

export default TeamAbilities;
