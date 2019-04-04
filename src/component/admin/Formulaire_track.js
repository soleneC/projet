import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

class Formulaire_track extends Component {

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
    if(!fields["title"]){
      formIsValid = false;
      errors["title"] = "Ne peut être vide";
    }

    //birthday
    if(!fields["listenings"]){
      formIsValid = false;
      errors["listenings"] = "Ne peut être vide";
    }

    //followers
    if(!fields["likes"]){
      formIsValid = false;
      errors["likes"] = "Ne peut être vide";
    }


    this.setState({errors: errors});
    return formIsValid;
  }

  contactSubmit(e){
    e.preventDefault();
    if(this.handleValidation()){
      alert("Ajout de la musique");
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
    <Label for="title" sm={2} class = "label">Titre</Label>
    <Col sm={10}>
    <Input type="text" ref="title" id="title" placeholder="Titre" onChange={this.handleChange.bind(this, "title")}
    value={this.state.fields["title"]}/>

    <span className="error">{this.state.errors["title"]}</span>

    </Col>
    </FormGroup>

    <FormGroup row>
    <Label for="duration" sm={2} class = "label">Durée</Label>
    <Col sm={10}>
    <Input type="number" ref="duration" id="duration" placeholder="Durée en secondes" onChange={this.handleChange.bind(this, "duration")}
    value={this.state.fields["duration"]}/>
    <span className="error">{this.state.errors["duration"]}</span>
    </Col>
    </FormGroup>

    <FormGroup row>
    <Label for="listenings" sm={2} class = "label">Ecoutes</Label>
    <Col sm={10}>
    <Input type="number" ref="listenings" id="listenings" placeholder="Nombre d'écoutes"  onChange={this.handleChange.bind(this, "listenings")}
    value={this.state.fields["listenings"]}/>
    <span className="error">{this.state.errors["listenings"]}</span>
    </Col>
    </FormGroup>

    <FormGroup row>
    <Label for="likes" sm={2} class = "label">Likes</Label>
    <Col sm={10}>
    <Input type="number" ref="likes" id="likes" placeholder="Nombre de likes"  onChange={this.handleChange.bind(this, "likes")}
    value={this.state.fields["likes"]}/>
    <span className="error">{this.state.errors["likes"]}</span>
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

         axios.put("http://localhost:8000/tracks", {


      title: this.state.fields.title,
      listenings: this.state.fields.listenings,
      duration: this.state.fields.duration,
      likes: this.state.fields.likes


        })

      }
    }


    export default Formulaire_track;
