import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Form extends Component {
  render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="name" sm={2}>Nom</Label>
          <Col sm={10}>
            <Input type="text" name="name" id="name" placeholder="?Nom" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>Zone de texte</Label>
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

export default Form;
