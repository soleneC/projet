import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, FormGroup, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

class List_albums extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: [],
    }
  }

  componentDidMount() {
    this.sync();
  }

  Actualiser(e){
    e.preventDefault();
    this.sync();
  }

  render() {
    const { albums } = this.state;


    const liste =[];

    for (let i = 0 ; i< albums.length;i++){
      liste.push(
         <tr key={i}>
            <td> {i}</td>
            <td> {albums[i].title}</td>
            <td> {albums[i].genre}</td>
            <td> { new Date (albums[i].release).toLocaleDateString() }</td>
            <td> <a href={ albums[i].cover_url}> { albums[i].cover_url} </a> </td>
         </tr>
        )
    }

    return (
    <div>
      <Col sm={{ size: 10}}>
          <Button type="submit" onClick={this.Actualiser.bind(this)} className="btn btn-primary">Actualiser</Button>
      </Col>
      <Table responsive dark>
        <thead>
          <tr>
            <th>Album</th>
            <th>Titre</th>
            <th>Genre</th>
            <th>Date de sortie</th>
            <th>URL cover</th>
          </tr>
        </thead>
        <tbody>
            { liste }

        </tbody>
      </Table>
      </div>
    );
  }

  sync() {
    axios.get("http://localhost:8000/albums/")
      .then((rep) => this.setState({ albums: rep.data }))

      .catch((err)=>{
          console.error(err);
          this.status(500).send({"errorServer": err})
         });
  }
}

export default List_albums;
