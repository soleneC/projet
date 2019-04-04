import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, FormGroup, Col } from 'reactstrap';
import axios from 'axios';

class List_tracks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tracks: [],
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
    const { tracks } = this.state;


    const liste =[];

    for (let i = 0 ; i< tracks.length;i++){
      liste.push(
         <tr key={i}>
            <td> {i}</td>
            <td> {tracks[i].title}</td>
            <td> { tracks[i].duration }</td>
            <td> { tracks[i].listenings} </td>
             <td> { tracks[i].likes} </td>
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
            <th>Track</th>
            <th>Titre</th>
            <th>Durée</th>
            <th>Ecoutes</th>
            <th>Likes</th>
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
    axios.get("http://localhost:8000/tracks/")
      .then((rep) => this.setState({ tracks: rep.data }))

      .catch((err)=>{
          console.error(err);
          this.status(500).send({"errorServer": err})
         });
  }
}

export default List_tracks;
