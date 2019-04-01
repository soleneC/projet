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

    const names = [];
    const birthdays = [];
    const followers = [];
    let ids = [];
    let year;
    let month;
    let day;
    let birthday;

    for (let i = 0; i < artists.length; ++i){
      ids[i] = <tr>{i}</tr>;
    }

    artists.forEach(a => {
      names.push(<tr>{a.name}</tr>);

      year = new Date(a.dateOfBirth).getFullYear();
      month = new Date(a.dateOfBirth).getMonth() +1;
      day = new Date(a.dateOfBirth).getDate();
      birthday = `${day}/${month}/${year}`;
      birthdays.push(<tr>{birthday}</tr>);

      followers.push(<tr>{a.followers}</tr>);
    });

    return (
    <div>
      <Col sm={{ size: 10}}>
          <Button type="submit" onClick={this.Actualiser.bind(this)} className="btn btn-primary">Actualiser</Button>
      </Col>
      <Table responsive dark>
        <thead>
          <tr>
            <th>Artists</th>
            <th>Name</th>
            <th>Birthday</th>
            <th>Followers</th>
          </tr>
        </thead>
        <tbody>
            <td>{ids}</td>
            <td>{names}</td>
            <td>{birthdays}</td>
            <td>{followers}</td>

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
