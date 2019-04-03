import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

class Formulaire_album extends Component {

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

    // Title
    if(!fields["title"]){
      formIsValid = false;
      errors["title"] = "Ne peut être vide";
    }

    // Release
    if(!fields["release"]){
      formIsValid = false;
      errors["release"] = "Ne peut être vide";
    }

    // Genre
    if(!fields["genre"]){
      formIsValid = false;
      errors["genre"] = "Ne peut être vide";
    }

    // Cover
    if(!fields["cover_url"]){
      formIsValid = false;
      errors["cover_url"] = "Ne peut être vide";
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  contactSubmit(e){
    e.preventDefault();
    if(this.handleValidation()){
      alert("Ajout de l'album");
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
        <Label for="release" sm={2} class = "label">Date de réalisation</Label>
        <Col sm={10}>
          <Input type="date" ref="release" id="release" placeholder="Date de réalisation" onChange={this.handleChange.bind(this, "release")}
          value={this.state.fields["release"]}/>
          <span className="error">{this.state.errors["release"]}</span>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="genre" sm={2} class = "label">Genre</Label>
        <Col sm={10}>
          <Input type="select" ref="genre" id="genre" onChange={this.handleChange.bind(this, "genre")} value={this.state.fields["genre"]}>
            <option>Rap</option>
            <option>Rock</option>
            <option>Jazz</option>
            <option>Pop</option>
            <option>Classique</option>
            <option>Soul</option>
            <option>Techno</option>
          </Input>
          <span className="error">{this.state.errors["genre"]}</span>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="cover_url" sm={2} class = "label">Photo de couverture</Label>
        <Col sm={10}>
          <Input type="text" ref="cover_url" id="cover_url" placeholder="https://www.exemple_photo.jpg/" onChange={this.handleChange.bind(this, "cover_url")}
          value={this.state.fields["cover_url"]}/>
          <span className="error">{this.state.errors["cover_url"]}</span>
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
    axios.put("http://localhost:8000/albums", {

    title: this.state.fields.title,
    release: this.state.fields.release,
    genre: this.state.fields.genre,
    cover_url: this.state.fields.cover_url,
    })

  }
}

export default Formulaire_album;
