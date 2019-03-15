import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Formulaire extends Component {
  render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="surname" sm={2}>Nom</Label>
          <Col sm={10}>
            <Input type="text" name="surname" id="surname" placeholder="Nom" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="name" sm={2} class = "label">Prénom</Label>
          <Col sm={10}>
            <Input type="text" name="name" id="name" placeholder="Prénom" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>Commentaire</Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText" />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Envoyer</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default Formulaire;
