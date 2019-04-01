import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, FormGroup, Col } from 'reactstrap';
import axios from 'axios';

class List_artist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artists: [],
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
    const { artists } = this.state;


    const liste =[];

    for (let i = 0 ; i< artists.length;i++){
      liste.push(
         <tr key={i}>
            <td> {i}</td>
            <td> {artists[i].name}</td>
            <td> { new Date (artists[i].dateOfBirth).toLocaleDateString() }</td>
            <td> { artists[i].followers} </td>
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
            <th>Artiste</th>
            <th>Nom</th>
            <th>Naissance</th>
            <th>Followers</th>
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
    axios.get("http://localhost:8000/artists/")
      .then((rep) => this.setState({ artists: rep.data }))

      .catch((err)=>{
          console.error(err);
          this.status(500).send({"errorServer": err})
         });
  }
}

export default List_artist;
