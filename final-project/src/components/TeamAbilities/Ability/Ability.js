import './Ability.css';
import React, { Component } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

class Ability extends Component {
  render() {
    return (
      <Row className='ability'>
        <Col xs={12} className='type'>
          {this.props.abilityType}:
        </Col>
        <Col xs={12} className='name'>
          {this.props.kit.name}
        </Col>
        <Col xs={12} className='content'>
          {this.props.kit.levels[0]}
        </Col>
      </Row>
    );
  }
}

export default Ability;
