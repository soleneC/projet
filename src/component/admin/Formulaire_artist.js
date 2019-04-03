import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';



class Formulaire_artist extends Component {

  constructor (props) {
    super(props);

    this.state = {
      fields: {},
      errors: {}
    }
  }

  handleValidation(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if(!fields["name"]){
      formIsValid = false;
      errors["name"] = "Ne peut être vide";
    }

    //birthday
    if(!fields["birthday"]){
      formIsValid = false;
      errors["birthday"] = "Ne peut être vide";
    }

    //followers
    if(!fields["followers"]){
      formIsValid = false;
      errors["followers"] = "Ne peut être vide";
    }


    this.setState({errors: errors});
    return formIsValid;
  }

  contactSubmit(e){
    e.preventDefault();
    if(this.handleValidation()){
      alert("Ajout de l'artiste");
      this.sync();
    }
    else{
      alert("Le formulaire n'est pas complet")
    }

  }

  handleChange(field, e){
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({fields});
  }



  componentDidMount()
   {
  this.sync();
   }

  render() {
  return (
    <Form onSubmit= {this.contactSubmit.bind(this)}>
    <FormGroup row>
    <Label for="name" sm={2} class = "label">Nom</Label>
    <Col sm={10}>
    <Input type="text" ref="name" id="name" placeholder="Nom" onChange={this.handleChange.bind(this, "name")}
    value={this.state.fields["name"]}/>

    <span className="error">{this.state.errors["name"]}</span>

    </Col>
    </FormGroup>

    <FormGroup row>
    <Label for="birthday" sm={2} class = "label">Naissance</Label>
    <Col sm={10}>
    <Input type="date" ref="birthday" id="birthday" placeholder="Naissance" onChange={this.handleChange.bind(this, "birthday")}
    value={this.state.fields["birthday"]}/>
    <span className="error">{this.state.errors["birthday"]}</span>
    </Col>
    </FormGroup>

    <FormGroup row>
    <Label for="followers" sm={2} class = "label">Followers</Label>
    <Col sm={10}>
    <Input type="number" ref="followers" id="followers" placeholder="Followers"  onChange={this.handleChange.bind(this, "followers")}
    value={this.state.fields["followers"]}/>
    <span className="error">{this.state.errors["followers"]}</span>
    </Col>
    </FormGroup>

    <FormGroup check row>
    <Col sm={{ size: 10, offset: 2 }}>
    <Button type="submit" className="btn btn-primary">Ajouter</Button>
    </Col>
    </FormGroup>
    </Form>
    );
}

      sync() {

         axios.put("http://localhost:8000/artists", {


      name: this.state.fields.name,
      dateOfBirth: this.state.fields.birthday,
      followers: this.state.fields.followers


        })

      }
    }


    export default Formulaire_artist;
