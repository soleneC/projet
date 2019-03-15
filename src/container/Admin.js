import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Formulaire from '../component/admin/Formulaire';

class Admin extends Component {
  render() {
    return (
        <row>
          <div><Formulaire /></div>
        </row>

    );
  }
}

export default Admin;
