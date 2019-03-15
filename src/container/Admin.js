import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Formulaire from '../component/admin/Formulaire';

class Admin extends Component {
  render() {
    return (
      <container class = "formulaire">
        <row>
          <div><Formulaire /></div>
        </row>
      </container>
    );
  }
}

export default Admin;
