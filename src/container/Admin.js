import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Formulaire_artist from '../component/admin/Formulaire_artist';
import Formulaire_album from '../component/admin/Formulaire_album';
import Formulaire_track from '../component/admin/Formulaire_track';
import List_artist from '../component/admin/List_artist';
import List_albums from '../component/admin/List_albums';
import List_tracks from '../component/admin/List_tracks';
import '../component/admin/Formulaire.css';

class Admin extends Component {
  render() {
    return (
      <Row Class>
        <Col xs="12" sm="6" className = "liste">
        <h2>Artistes</h2>
          <div><List_artist /></div>
        </Col>

          <Col xs="12" sm="6" className = "formulaire">
            <h2>Ajouter un Artiste</h2>
            <div><Formulaire_artist /></div>
          </Col>
          
          <Col xs="12" sm="6" className = "liste">
          <h2>Albums</h2>
          <div><List_albums /></div>
        </Col>
        

        <Col xs="12" sm="6" className = "formulaire">
        <h2>Ajouter un Album</h2>
          <div><Formulaire_album /></div>
        </Col>

        <Col xs="12" sm="6" className = "liste">
        <h2>Musiques</h2>
          <div><List_tracks /></div>
        </Col>

        <Col xs="12" sm="6" className = "formulaire">
        <h2>Ajouter une musique</h2>
          <div><Formulaire_track /></div>
        </Col>
        </Row>

    );
  }
}

export default Admin;
