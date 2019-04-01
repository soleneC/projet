import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Formulaire extends Component {
  render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="name" sm={2} class = "label">Name</Label>
          <Col sm={10}>
            <Input type="text" name="name" id="name" placeholder="Name" />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="birthday" sm={2} class = "label">Birthday</Label>
          <Col sm={10}>
            <Input type="date" name="birthday" id="birthday" placeholder="Birthday" />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="followers" sm={2} class = "label">Followers</Label>
          <Col sm={10}>
            <Input type="number" name="followers" id="followers" placeholder="Followers" />
          </Col>
        </FormGroup>

        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>ADD</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default Formulaire;
