import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Admin.css';
import Formulaire_artist from '../component/admin/Formulaire_artist';
import Formulaire_album from '../component/admin/Formulaire_album';
import Formulaire_track from '../component/admin/Formulaire_track';
import List_artist from '../component/admin/List_artist';
import List_album from '../component/admin/List_album';
import List_track from '../component/admin/List_track';

class Admin extends Component {
  render() {
    return (
      <Row>
        <Col xs="12" sm="6">
          <div><List_artist /></div>
        </Col>

        <Col xs="12" sm="6">
          <h2 class="titre_forms">Ajouter un Artiste</h2>
          <div><Formulaire_artist /></div>
        </Col>

        <Col xs="12" sm="6">
          <div><List_album /></div>
        </Col>

        <Col xs="12" sm="6">
          <h2 class="titre_forms">Ajouter un Album</h2>
          <div><Formulaire_album /></div>
        </Col>

        <Col xs="12" sm="6">
          <div><List_track /></div>
        </Col>

        <Col xs="12" sm="6">
          <h2 class="titre_forms">Ajouter une musique</h2>
          <div><Formulaire_track /></div>
        </Col>
      </Row>
    );
  }
}

export default Admin;
