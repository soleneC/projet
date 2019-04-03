import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Formulaire_artist from '../component/admin/Formulaire_artist';
import Formulaire_album from '../component/admin/Formulaire_album';
import List_artist from '../component/admin/List_artist';
import List_albums from '../component/admin/List_albums';
import '../component/admin/Formulaire.css';

class Admin extends Component {
  render() {
    return (
      <Row Class>
        <Col xs="12" sm="6" className = "liste">
          <div><List_artist /></div>
        </Col>

          <Col xs="12" sm="6" className = "formulaire">
            <h2>Ajouter un Artiste</h2>
            <div><Formulaire_artist /></div>
          </Col>
          
          <Col xs="12" sm="6" className = "liste">
          <div><List_albums /></div>
        </Col>
        

        <Col xs="12" sm="6" className = "formulaire">
        <h2>Ajouter un Album</h2>
          <div><Formulaire_album /></div>
        </Col>
        </Row>

    );
  }
}

export default Admin;
