import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, FormGroup, Col } from 'reactstrap';
import axios from 'axios';

class List_album extends Component {
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
            <td> { albums[i].title }</td>
            <td> { new Date (albums[i].release).toLocaleDateString() }</td>
            <td> { albums[i].genre } </td>
            <td> { albums[i].cover_url } </td>
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
            <th>Albums</th>
            <th>Titre</th>
            <th>Date de réalisation</th>
            <th>Genre</th>
            <th>Photo de couverture</th>
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

export default List_album;
