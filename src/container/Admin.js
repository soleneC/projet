import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Formulaire from '../component/admin/Formulaire';
import List_artist from '../component/admin/List_artist';

class Admin extends Component {
  render() {
    return (
      <Row>
        <Col xs="12" sm="6">
          <div><List_artist /></div>
        </Col>

          <Col xs="12" sm="6" class = "formulaire">
            <h2>Add an Artist</h2>
            <div><Formulaire /></div>
          </Col>
        </Row>

    );
  }
}

export default Admin;
