import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';
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

  render() {
    const { artists } = this.state;

    const names = [];
    const birthdays = [];
    const followers = [];
    let ids = [];  

    for (let i = 0; i < artists.length; ++i){
      ids[i] = <tr>{i}</tr>;
    }

    artists.forEach(a => {
      names.push(<tr>{a.name}</tr>);
      birthdays.push(<tr>{a.dateOfBirth}</tr>);
      followers.push(<tr>{a.followers}</tr>);
    });

    return (
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
